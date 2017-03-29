import Component from '../component';
import {GRID_NAME, LAYER_NAME} from 'ng/definition';
import TemplatePath from 'core/template/template.path';

TemplatePath
	.register(LAYER_NAME, template => {
		return {
			model: 'layer',
			resource: template.for
		};
	});

class Layer extends Component {
	constructor() {
		super();
	}

	onInit() {
	}
}

Layer.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: Layer
};