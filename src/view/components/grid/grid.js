import RootComponent from '../root.component';

export class Grid extends RootComponent {
	constructor($element, $transclude) {
		super('data', 'selection', 'sort', 'group', 'pivot', 'edit');

		this.$element = $element;
		this.$transclude = $transclude;
	}

	onInit() {
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
		const columns = this.model.data().columns;
		const visibility = this.model.visibility;
		visibility({
			pin: {
				left: columns.some(c => c.pin === 'left'),
				right: columns.some(c => c.pin === 'right')
			}
		});
	}

	get visibility() {
		// TODO: get rid of that
		return this.model.visibility();
	}
}

Grid.$inject = [
	'$element',
	'$transclude'
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
	}
};