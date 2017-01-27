import Component from '../component';
import {GRID_NAME} from '../../../definition';

class Check extends Component {
	constructor() {
		super('group');
	}

	onInit() {
	}
}

Check.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: Check
};