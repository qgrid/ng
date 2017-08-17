import {View} from '../view';
import {Command} from '../command';
import {flatView as nodeFlatView} from '../node';
import {getFactory as valueFactory} from '../services/value';
import {getFactory as labelFactory} from '../services/label';

export class GroupView extends View {
	constructor(model, table, commandManager) {
		super(model);

		this.valueFactory = valueFactory;
		this.toggleStatus = new Command({
			execute: node => {
				if (!node) {
					node = model.navigation().cell.row;
				}

				const toggle = model.group().toggle;
				if (toggle.execute(node) !== false) {
					node.state.expand = !node.state.expand;
					const view = model.view;
					const nodes = view().nodes;
					view({rows: nodeFlatView(nodes)}, {behavior: 'core', source: 'group.view'});
				}
			},
			canExecute: node => {
				if (!node) {
					const cell = model.navigation().cell;
					if (cell && cell.column.type === 'group') {
						node = cell.row;
					}
				}

				const toggle = model.group().toggle;
				return node && node.type === 'group' && toggle.canExecute(node);
			},
			shortcut: model.group().shortcut.toggle
		});

		const shortcut = model.action().shortcut;
		shortcut.register(commandManager, [this.toggleStatus]);
	}

	count(node) {
		return node.children.length || node.rows.length;
	}

	status(node) {
		return node.state.expand ? 'expand' : 'collapse';
	}

	offset(node) {
		const groupColumn = this.column;
		if (groupColumn) {
			return groupColumn.offset * node.level;
		}

		return 0;
	}

	value(node) {
		const groupColumn = this.column;
		if (groupColumn) {
			return labelFactory(groupColumn)(node);
		}

		return node.key;
	}

	get column() {
		return (this.model.view().columns[0] || []).map(c => c.model).find(c => c.type === 'group');
	}
}