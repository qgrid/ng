import Component from '../component';
import {GRID_NAME} from 'src/definition';

class Selection extends Component {
	constructor() {
		super();
	}

	onInit() {
	}
}

Selection.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: Selection
};