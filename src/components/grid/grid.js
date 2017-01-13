'use strict';

import RootComponent from '../root.component';

class Component extends RootComponent {
	constructor() {
		super('data');
	}
}

Component.$inject = [];

export default {
	templateUrl: 'qgrid.html',
	controller: Component,
	bindings: {
		rows: '<',
		columns: '<',
		model: '<'
	}
};