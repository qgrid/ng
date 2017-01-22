import Directive from '../directive';
import {GRID_NAME, VIEW_CORE_NAME} from '../../definition';

class ViewCore extends Directive(VIEW_CORE_NAME, {root: `^^${GRID_NAME}`}) {
	constructor() {
		super();
	}

	onInit() {
		const model = this.root.model;
		this.rows = model.data().rows;
		model.dataChanged.on(e => {
			if (e.changes.hasOwnProperty('rows')) {
				this.rows = e.state.rows;
			}
		});
	}
}

ViewCore.$inject = [];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$view',
	controller: ViewCore,
	require: ViewCore.require,
	link: ViewCore.link
};