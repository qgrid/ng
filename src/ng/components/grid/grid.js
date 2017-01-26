import RootComponent from '../root.component';

export class Grid extends RootComponent {
	constructor($element, $transclude) {
		super('data', 'selection');

		this.$element = $element;
		this.$transclude = $transclude;
	}

	onInit() {
		let template = null;
		let templateScope = null;

		this.$transclude((clone, scope) => {
			template = clone;
			templateScope = scope;

			this.$element.append(clone);
		});

		template.remove();
		templateScope.$destroy();

		this.model.selectionChanged.on(e => {
			if (e.changes.hasOwnProperty('items')) {
				this.onSelectionChanged({
					$event: {
						state: this.model.selection()
					}
				});
			}
		});
	}
}

Grid.$inject = ['$element', '$transclude'];

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
		selectionItems: '<selection',
		selectionMode: '<',
		onSelectionChanged: '&'
	}
};