import Component from '../component';
import {GRID_NAME, TOOLBAR_NAME} from '@grid/view/definition';
import {TemplatePath} from '@grid/core/template';

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