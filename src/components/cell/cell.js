'use strict';

import Component from '../component';

class Cell extends Component {
	constructor() {
		super('body');
	}

	onInit() {
	}
}

Cell.$inject = [];

export default {
	require: {
		root: '^^qGrid'
	},
	controller: Cell,
	bindings: {
	}
};