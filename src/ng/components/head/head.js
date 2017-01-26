import ModelComponent from '../model.component';
import {GRID_NAME} from '../../../definition';

class Head extends ModelComponent {
	constructor() {
		super('head');
	}
}

Head.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: Head,
	bindings: {
		headSticky: '<sticky'
	}
};