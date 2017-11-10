import Component from '@grid/view/components/component';
import {GRID_NAME} from '@grid/view/definition';
import {Aggregation} from '@grid/core/services';
import {TemplatePath} from '@grid/core/template';
import {LEGEND_NAME} from '../definition';

TemplatePath
	.register(LEGEND_NAME, () => {
		return {
			model: 'legend',
			resource: 'content'
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