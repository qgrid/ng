import RootComponent from '../root.component';
import {Table, Bag} from '@grid/core/dom';
import {LayerFactory} from '@grid/view/services';
import {AppError} from '@grid/core/infrastructure';
import {TableCommandManager} from '@grid/core/command';
import {isUndefined} from '@grid/core/utility';
import TemplateLink from '../template/template.link';
import {EventListener, EventManager, Model} from '@grid/core/infrastructure';

export class Grid extends RootComponent {
	constructor($rootScope, $scope, $element, $transclude, $document, $timeout, $templateCache, $compile) {
		super('grid', 'data', 'selection', 'sort', 'group', 'pivot', 'edit', 'style', 'action', 'filter');

		this.$rootScope = $rootScope;
		this.$scope = $scope;
		this.$element = $element;
		this.$transclude = $transclude;
		this.$timeout = $timeout;

		this.template = new TemplateLink($compile, $templateCache);
		this.markup = {
			document: $document[0]
		};

		this.bag = {
			head: new Bag(),
			body: new Bag(),
			foot: new Bag()
		};
		this.listener = new EventListener($element[0], new EventManager(this, this.applyFactory(null, 'sync')));
	}

	onInit() {
		const model = this.model;
		if (model.grid().status === 'bound') {
			throw new AppError('grid', `Model is already used by grid "${model.grid().id}"`);
		}

		model.grid({
			status: 'bound'
		});

		const bag = this.bag;
		const layerFactory = new LayerFactory(this.markup, this.template);
		const tableContext = {
			layer: name => layerFactory.create(name),
			bag: bag
		};

		this.table = new Table(model, this.markup, tableContext);
		this.commandManager = new TableCommandManager(this.applyFactory(), this.table);
		this.using(this.listener.on('keydown', e => {
			if (model.action().shortcut.keyDown(e)) {
				e.preventDefault();
				e.stopPropagation();
			}
		}));

		if (!this.gridId) {
			this.$element[0].id = model.grid().id;
		}

		this.compile();
		this.using(this.model.sceneChanged.watch(e => {
			if (e.hasChanges('columns')) {
				this.invalidateVisibility();
			}
		}));
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

	invalidateVisibility() {
		const area = this.model.scene().area;
		const visibility = this.model.visibility;
		visibility({
			pin: {
				left: area.left.length,
				right: area.right.length
			}
		});
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

	get isActive() {
		return this.table.view.isFocused();
	}

	onDestroy() {
		super.onDestroy();

		this.model.grid({
			status: 'unbound'
		});

		Model.dispose(this.model, 'component');
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
	'$compile'
];

/**
 * By convention all binding should be named in camelCase like: modelname + [P]ropertyname
 */
export default {
	transclude: true,
	templateUrl: 'qgrid.grid.tpl.html',
	controller: Grid,
	controllerAs: '$grid',
	bindings: {
		gridId: '@id',
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