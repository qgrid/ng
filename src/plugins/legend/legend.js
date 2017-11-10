import Component from '@grid/view/components/component';
import {GRID_NAME} from '@grid/view/definition';
import {TemplatePath} from '@grid/core/template';
import {LEGEND_NAME} from '../definition';

TemplatePath
	.register(LEGEND_NAME, template => {
		return {
			model: 'legend',
			resource: template.for
		};
	});

class Legend extends Component {
	constructor() {
		super();
	}
}

Legend.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: Legend,
	controllerAs: '$legend'
};