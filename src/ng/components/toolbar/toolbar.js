import Component from '../component';
import {GRID_NAME} from '../../../definition';

class Toolbar extends Component {
	constructor() {
		super('group');
	}

	onInit() {
	}
}

Toolbar.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: Toolbar
};