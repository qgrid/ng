'use strict';

import RootComponent from '../root.component';

class Grid extends RootComponent {
	constructor($element, $transclude) {
		super('data', 'selection');

		this.$element = $element;
		this.$transclude = $transclude;
	}

	onInit() {
		this.$transclude(clone => {
			this.$element.append(clone);
		});

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
	templateUrl: 'qgrid.html',
	controller: Grid,
	bindings: {
		model: '<',
		dataRows: '<rows',
		dataColumns: '<columns',
		selectionItems: '<selection',
		selectionMode: '<',
		onSelectionChanged: '&'
	}
};