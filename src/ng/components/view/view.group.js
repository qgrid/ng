import {flatView} from 'core/node/node.service';

export default class ViewPivot {
	constructor(view) {
		this.view = view;
	}

	get nodes() {
		const state = this.view.model.view();
		const nodes = state.nodes;
		return flatView(nodes);
	}
}