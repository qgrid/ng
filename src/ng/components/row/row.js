import ModelComponent from '../model.component';
import { GRID_NAME } from 'ng/definition';

class Row extends ModelComponent {
	constructor() {
		super();
	}
}

Row.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: Row
};