import Component from '../component';
import {GRID_NAME} from 'src/definition';

class BoxCore extends Component {
	constructor() {
		super();
	}

	get model() {
		return this.root.model;
	}
}

BoxCore.$inject = [];

export default {
	controller: BoxCore,
	controllerAs: '$view',
	require: {
		'root': `^${GRID_NAME}`
	}
}