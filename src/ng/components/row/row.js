import ModelComponent from '../model.component';
import { GRID_NAME, ROW_NAME } from 'ng/definition';
import TemplatePath from 'core/template/template.path';

TemplatePath
	.register(ROW_NAME, () => {
		return {
			model: 'row',
			resource: 'details'
		};
	});

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