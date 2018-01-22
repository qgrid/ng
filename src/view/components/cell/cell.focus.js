import Component from '../component';
import {GRID_NAME} from '@grid/view/definition';

class CellFocus extends Component {
	constructor() {
		super();
	}

	onInit() {
	}
}

CellFocus.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: CellFocus
};