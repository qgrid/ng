import ModelComponent from '../model.component';
import { GRID_NAME } from 'ng/definition';

class RowDetails extends ModelComponent {
	constructor() {
		super();
	}
}

RowDetails.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: RowDetails
};