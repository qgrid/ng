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
		const resource = clone(model.cell().resource);
		if(resource.hasOwnProperty(this.key)){
			throw new Error('cell', `ambiguous template key ${this.key}`);
		}

		resource[this.key] = this.$element[0].innerHTML;
		model.cell({resource: resource});
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