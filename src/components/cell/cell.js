'use strict';

import Component from '../component';

class Cell extends Component {
	constructor($element) {
		super('body');
		this.$element = $element;
	}

	onInit() {
		this.root
			.model
			.cell({
				key: this.key,
				template: this.$element[0].innerHTML
			});
	}
}

Cell.$inject = ['$element'];

export default {
	require: {
		root: '^^qGrid',
		body: '^qGridBody'
	},
	controller: Cell,
	bindings: {
		key: '@'
	}
};