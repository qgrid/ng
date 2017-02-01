import View from './view';
import Command from 'core/infrastructure/command';
import {flatView as nodeFlatView} from 'core/node/node.service';
import {map as getColumnMap} from 'core/column/column.service';
import nodeBuilder from 'core/node/node.builder';

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

	static build(model, valueFactory) {
		return () => {
			const dataState = model.data();
			const groupState = model.group();

			const build = nodeBuilder(
				getColumnMap(dataState.columns),
				groupState.by,
				valueFactory
			);

			return build(dataState.rows);
		};
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