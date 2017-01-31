import View from './view';
import Aggregation from 'core/services/aggregation';
import AppError from 'core/infrastructure/error';
import Command from 'core/infrastructure/command';

export default class GroupView extends View {
	constructor(model, valueFactory) {
		super(model);

		this.valueFactory = valueFactory;
		this.toggleStatus = new Command({
			execute: node => node.state.expand = !node.state.expand,
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