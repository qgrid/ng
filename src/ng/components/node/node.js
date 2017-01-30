import ModelComponent from '../model.component';
import {GRID_NAME} from 'src/definition';

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