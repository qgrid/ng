import Component from '../component';
import {GRID_NAME} from 'src/definition';

class ColumnList extends Component {
	constructor() {
		super();
	}

	onInit() {
	}
}

ColumnList.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: ColumnList
};