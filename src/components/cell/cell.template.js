'use strict';

import Component from '../component';
import Error from '../../core/infrastructure/error';
import {clone} from '../../core/services/utility';

class CellTemplate extends Component {
	constructor($element) {
		super();
		this.$element = $element;
	}

	onInit() {
		const model = this.root.model;
		const templates = clone(model.cell().templates);
		if(templates.hasOwnProperty(this.key)){
			throw new Error('cell', `ambiguous template key ${this.key}`);
		}

		templates[this.key] = this.$element[0].innerHTML;
		model.cell({templates: templates});
	}
}

CellTemplate.$inject = ['$element'];

export default {
	require: {
		root: '^^qGrid',
		body: '^qGridBody'
	},
	controller: CellTemplate,
	bindings: {
		key: '@'
	}
};