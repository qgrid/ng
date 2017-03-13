import RootComponent from '../root.component';
import PipeUnit from 'core/pipe/units/pipe.column.unit';

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
			if (!e || e.changes.hasOwnProperty('items')) {
				this.onSelectionChanged({
					$event: {
						state: model.selection(),
						changes: e ? e.changes : {}
					}
				});
			}

			if (!e || e.changes.hasOwnProperty('unit') || e.changes.hasOwnProperty('mode')) {
				service.invalidate('selection', e ? e.changes : {}, PipeUnit.column);
			}
		});

		model.dataChanged.watch(e => {
			if (!e || e.changes.hasOwnProperty('columns')) {
				const index = Array.from(model.columnList().index);
				const indexSet = new Set(index);
				index.push(...model.data().columns.filter(c => !indexSet.has(c.key)).map(c => c.key));
				model.columnList({index: index});
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