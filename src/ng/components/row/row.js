import ModelComponent from '../model.component';
import { GRID_NAME, ROW_NAME } from 'ng/definition';
import TemplatePath from 'core/template/template.path';

TemplatePath
	.register(ROW_NAME, (template) => {
		return {
			model: 'row',
			resource: template.for
		};
	});

class Row extends ModelComponent {
	constructor() {
		super('row');
	}
}

Row.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: Row,
	bindings: {
		rowMode: '@mode'
	}
};