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

	count(row) {
		const node = row[0];
		return node.children.length || node.rows.length;
	}

	status(row) {
		const node = row[0];
		return node.state.expand ? 'expand' : 'collapse';
	}

	offset(row) {
		const state = this.model.node();
		const node = row[0];
		return state.offset * node.level;
	}

	value(row, column) {
		const node = row[0];
		const rows = this.model.view().rows;
		switch (node.type) {
			case 'group': {
				if (column.aggregation) {
					if (!Aggregation.hasOwnProperty(column.aggregation)) {
						throw new AppError(
							'foot',
							`Aggregation ${column.aggregation} is not registered`);
					}

					const getValue = this.valueFactory(column);
					return Aggregation[column.aggregation](node.rows.map(i => rows[i]), getValue);
				}

				return null;
			}
			case 'row': {
				const rowIndex = node.rows[0];
				return this.valueFactory(column)(rows[rowIndex]);
			}
			default:
				throw new AppError(
					'view.group',
					`Invalid node type ${node.type}`
				)
		}
	}

}