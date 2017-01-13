'use strict';

import RootComponent from '../root.component';

class Component extends RootComponent {
	constructor() {
		super('data', 'selection');
	}

	onInit() {
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

Component.$inject = [];

/**
 * By convention all binding should be named in camelCase like: modelname + [P]ropertyname
 */
export default {
	templateUrl: 'qgrid.html',
	controller: Component,
	bindings: {
		model: '<',
		dataRows: '<rows',
		dataColumns: '<columns',
		selectionItems: '<selection',
		selectionMode: '<',
		onSelectionChanged: '&'
	}
};