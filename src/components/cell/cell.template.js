'use strict';

import Component from '../component';
import Error from '../../core/infrastructure/error';
import {clone} from '../../core/services/utility';
import {GRID_NAME, CELL_TEMPLATE_NAME, BODY_TEMPLATE_NAME, HEAD_TEMPLATE_NAME} from '../../definition';

class CellTemplate extends Component {
	constructor($element) {
		super();
		this.$element = $element;
	}

	onInit() {
		const sourceKey = (this.body && 'body') || (this.head && 'head');
		if(!sourceKey){
			throw new Error('cell.template', `Controllers "${BODY_TEMPLATE_NAME}" or "${HEAD_TEMPLATE_NAME}", required by directive "${CELL_TEMPLATE_NAME}" can't be found`);
		}

		const model = this.root.model;
		const resource = clone(model[sourceKey]().resource);
		if (resource.hasOwnProperty(this.key)) {
			throw new Error('cell', `ambiguous template key ${this.key} in ${sourceKey}`);
		}

		resource[this.key] = this.$element[0].innerHTML;
		model[sourceKey]({resource: resource});
	}
}

CellTemplate.$inject = ['$element'];

export default {
	require: {
		root: `^^${GRID_NAME}`,
		body: `?^${BODY_TEMPLATE_NAME}`,
		head: `?^${HEAD_TEMPLATE_NAME}`
	},
	controller: CellTemplate,
	bindings: {
		key: '@'
	}
};