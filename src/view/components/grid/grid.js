import RootComponent from '../root.component';
import {Table} from '@grid/core/dom';
import {LayerFactory} from '@grid/view/services';
import {TableCommandManager, AppError} from '@grid/core/infrastructure';
import {isUndefined} from '@grid/core/utility';
import TemplateLink from '../template/template.link';

export class Grid extends RootComponent {
	constructor($rootScope, $scope, $element, $transclude, $document, $timeout, $templateCache, $compile) {
		super('grid', 'data', 'selection', 'sort', 'group', 'pivot', 'edit', 'style', 'action');

		this.$rootScope = $rootScope;
		this.$scope = $scope;
		this.$element = $element;
		this.$transclude = $transclude;
		this.$timeout = $timeout;

		this.template = new TemplateLink($compile, $templateCache);
		this.markup = {
			document: $document[0]
		};

		this.bag = new Map();
	}

	onInit() {
		const model = this.model;
		const bag = this.bag;
		const layerFactory = new LayerFactory(this.markup, this.template);
		const tableContext = {
			layer: name => layerFactory.create(name),
			model: element => bag.get(element) || null
		};

		this.table = new Table(model, this.markup, tableContext);
		this.commandManager = new TableCommandManager(this.applyFactory(), this.table);

		this.compile();
		this.model.viewChanged.watch(e => {
			if (e.hasChanges('columns')) {
				this.invalidateVisibility();
			}
		});
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
		const columns = this.table.data.columns();
		const visibility = this.model.visibility;
		visibility({
			pin: {
				left: columns.some(c => c.pin === 'left'),
				right: columns.some(c => c.pin === 'right')
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
		onSelectionChanged: '&',
		groupBy: '<',
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
		actionItems: '<actions'
	}
};