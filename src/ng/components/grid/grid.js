import RootComponent from '../root.component';
import PipeUnit from 'core/pipe/units/pipe.unit';

export class Grid extends RootComponent {
	constructor($element, $transclude, $document, serviceFactory) {
		super('data', 'selection', 'sort', 'group', 'pivot', 'edit');

		this.$element = $element;
		this.$transclude = $transclude;
		this.serviceFactory = model => serviceFactory.service(model);
		this.markup = {
			document: $document[0]
		};
	}

	onInit() {
		this.compile();

		const model = this.model;
		const service = this.serviceFactory(model);

		model.selectionChanged.watch(e => {
			if (e.hasChanges('items')) {
				this.onSelectionChanged({
					$event: {
						state: model.selection(),
						changes: e ? e.changes : {}
					}
				});
			}

			if (e.hasChanges('unit') || e.hasChanges('mode')) {
				service.invalidate('selection', e ? e.changes : {}, PipeUnit.column);
			}
		});

		model.navigationChanged.watch(e => {
			if (e.hasChanges('row') || e.hasChanges('column')) {
				const nav = model.navigation();
				let cell = null;
				if (nav.column >= 0 && nav.row >= 0) {
					const element = this.markup.body.rows[nav.row].cells[nav.column];
					const scope = angular.element(element).scope();
					cell = scope ? scope.$cell : null;
				}

				model.navigation({
					active: {
						cell: cell
					}
				});
			}
		});

		model.data()
			.triggers
			.forEach(name =>
				model[name + 'Changed']
					.watch(e => service.invalidate(name, e ? e.changes : {})));
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

	get visibility() {
		// TODO: get rid of that
		return this.model.visibility();
	}
}

Grid.$inject = [
	'$element',
	'$transclude',
	'$document',
	'qgrid'
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
		model: '<',
		dataRows: '<rows',
		dataColumns: '<columns',
		dataPipe: '<pipe',
		selectionItems: '<selection',
		selectionMode: '@',
		selectionUnit: '@',
		onSelectionChanged: '&',
		groupBy: '<',
		pivotBy: '<',
		sortBy: '<',
		sortMode: '@',
		editMode: '@'
	}
};