'use strict';

import RootComponent from '../component.root';

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