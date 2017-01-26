import ModelComponent from '../model.component';
import {GRID_NAME} from '../../../definition';

class ColumnList extends ModelComponent {
	constructor() {
		super('group');
	}

	onInit() {
	}
}

ColumnList.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: ColumnList,
	bindings: {
		groupBy: '<',
	}
};