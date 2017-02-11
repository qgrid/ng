import ModelComponent from '../model.component';
import {GRID_NAME} from 'src/definition';

class Head extends ModelComponent {
	constructor() {
		super('foot');
	}
}

Head.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: Head,
	bindings: {
	}
};