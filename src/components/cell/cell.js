'use strict';

import Component from '../component';

class Cell extends Component {
	constructor($element) {
		super('body');
		this.$elment = $element;
	}

	onInit() {
		this.root.model({
			template: this.$element.innerHTML
		});
	}
}

Cell.$inject = ['$element'];

export default {
	require: {
		root: '^^qGrid'
	},
	controller: Cell,
	bindings: {}
};