import Component from '@grid/view/components/component';
import {GRID_NAME} from '@grid/view/definition';

class ActionBar extends Component {
	constructor() {
		super();
	}
}

ActionBar.$inject = [];

export default {
	require: {
		root: `^^${GRID_NAME}`
	},
	controller: ActionBar
};