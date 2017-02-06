import View from './view';
import Command from 'core/infrastructure/command';
import {flatView as nodeFlatView} from 'core/node/node.service';

export default class GroupView extends View {
	constructor(model, valueFactory) {
		super(model);

		this.valueFactory = valueFactory;
		this.toggleStatus = new Command({
			execute: node => {
				node.state.expand = !node.state.expand;
				const view = model.view;
				const nodes = view().nodes;
				view({rows: nodeFlatView(nodes)});
			},
			canExecute: node => node.type === 'group'
		});
	}


	count(node) {
		return node.children.length || node.rows.length;
	}

	status(node) {
		return node.state.expand ? 'expand' : 'collapse';
	}

	offset(node) {
		const state = this.model.node();
		return state.offset * node.level;
	}

	value(node) {
		return node.key;
	}
}