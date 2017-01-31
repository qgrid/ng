import Component from '../component';
import {GRID_NAME, SELECTION_NAME} from 'src/definition';
import TemplatePath from '../template/template.path';

TemplatePath
	.register(SELECTION_NAME, template => {
		return {
			model: 'selection',
			resource: template.for
		};
	});

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