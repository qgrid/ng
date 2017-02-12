import Component from '../component';
import {GRID_NAME, TOOLBAR_NAME} from 'core/definition';
import TemplatePath from 'core/template/template.path';

TemplatePath
	.register(TOOLBAR_NAME, template => {
		return {
			model: 'toolbar',
			resource: template.for
		};
	});

class Toolbar extends Component {
	constructor() {
		super();
	}

	onInit() {
	}
}

Toolbar.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: Toolbar
};