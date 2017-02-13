import ModelComponent from '../model.component';
import {GRID_NAME, NODE_NAME} from 'ng/definition';
import TemplatePath from 'core/template/template.path';

TemplatePath
	.register(NODE_NAME, () => {
		return {
			model: 'node',
			resource: 'content'
		};
	});

class Node extends ModelComponent {
	constructor() {
		super('node');
	}

	onInit() {
	}
}

Node.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: Node,
	bindings: {
		'nodeOffset': '<offset'
	}
};