import RootComponent from '../root.component';
import { LayerFactory } from '@grid/view/services';
import { AppError } from '@grid/core/infrastructure';
import { isUndefined } from '@grid/core/utility';
import TemplateLink from '../template/template.link';
import { EventListener, EventManager } from '@grid/core/infrastructure';
import { GridCtrl } from '@grid/core/grid/grid.ctrl';

export class Grid extends RootComponent {
	constructor($rootScope, $scope, $element, $transclude, $document, $timeout, $templateCache, $compile, $window) {
		super('grid', 'data', 'selection', 'sort', 'group', 'pivot', 'edit', 'style', 'action', 'filter');

		this.$rootScope = $rootScope;
		this.$scope = $scope;
		this.$element = $element;
		this.$transclude = $transclude;
		this.$timeout = $timeout;

		this.template = new TemplateLink($compile, $templateCache);

		this.listener = new EventListener($element[0], new EventManager(this));
		this.windowListener = new EventListener($window, new EventManager(this));
	}

	onInit() {
		const model = this.model;
		if (!model) {
			throw new AppError('grid', 'Model is not setup');
		}

		const ctrl = this.ctrl = new GridCtrl(model, {
			layerFactory: markup => new LayerFactory(markup, this.template),
			element: this.$element[0]
		});

		this.table = ctrl.table;
		this.bag = ctrl.bag;
		this.markup = ctrl.markup;

		this.compile();

		this.using(this.windowListener.on('focusin', ctrl.invalidateActive.bind(ctrl)));
		this.using(this.listener.on('keydown', ctrl.keyDown.bind(ctrl)));
	}

	compile() {
		let template = null;
		let templateScope = null;

		this.$transclude((clone, scope) => {
			template = clone;
			templateScope = scope;

			this.$element.append(clone);
		});

		template.remove();
		templateScope.$destroy();
	}

	applyFactory(gf = null, mode = 'async') {
		return (lf, timeout) => {
			if (isUndefined(timeout)) {
				switch (mode) {
					case 'async': {
						return this.$scope.$applyAsync(() => {
							lf();

							if (gf) {
								gf();
							}
						});
					}
					case 'sync': {
						const phase = this.$rootScope.$$phase; // eslint-disable-line angular/no-private-call
						if (phase == '$apply' || phase == '$digest') {
							return lf();
						}
						return this.$scope.$apply(lf);
					}
					default:
						throw new AppError('grid', `Invalid mode ${mode}`);
				}
			}

			return this.$timeout(() => {
				lf();

				if (gf) {
					gf();
				}
			}, timeout);
		};
	}

	get visibility() {
		// TODO: get rid of that
		return this.model.visibility();
	}

	onDestroy() {
		super.onDestroy();

		this.ctrl.dispose();
	}
}

Grid.$inject = [
	'$rootScope',
	'$scope',
	'$element',
	'$transclude',
	'$document',
	'$timeout',
	'$templateCache',
	'$compile',
	'$window'
];

/**
 * By convention all bindings should be named in camelCase like: modelname + [P]ropertyname
 */
export default {
	transclude: true,
	templateUrl: 'qgrid.grid.tpl.html',
	controller: Grid,
	controllerAs: '$grid',
	bindings: {
		gridId: '@id',
		gridTitle: '@header',
		model: '<',
		dataRows: '<rows',
		dataColumns: '<columns',
		dataPipe: '<pipe',
		selectionItems: '<selection',
		selectionMode: '@',
		selectionUnit: '@',
		selectionKey: '<',
		selectionArea: '@',
		onSelectionChanged: '&',
		groupBy: '<',
		groupMode: '@',
		pivotBy: '<',
		sortBy: '<',
		sortMode: '@',
		editMode: '@',
		editEnter: '<',
		editCommit: '<',
		editCancel: '<',
		editReset: '<',
		styleRow: '<',
		styleCell: '<',
		actionItems: '<actions',
		filterUnit: '@'
	}
};