import {DataRow} from './data.row';
import {takeWhile, dropWhile, sumBy} from '../utility';
import {columnFactory} from '../column/column.factory';
import {Aggregation} from '../services';
import {AppError} from '../infrastructure';
import {set as setValue} from '../services/value';

export class NodeRow extends DataRow {
	constructor(model, context) {
		super(model, context);

		const createColumn = columnFactory(model);
		this.reference = {
			group: createColumn('group', {index: 0})
		};
	}

	colspan(node, column, pin) {
		if (node.type === 'group') {
			const groupColumn = this.findGroupColumn();
			if (groupColumn.model.pin === pin && !groupColumn.model.isVisible) {
				const groupSpan = takeWhile(this.columnList(pin), c => !c.model.aggregation);
				if (column.model.type === 'group') {
					return sumBy(groupSpan, c => c.colspan);
				}
			}
		}

		return super.colspan(node, column, pin);
	}

	columns(node, pin) {
		if (node.type === 'group') {
			const groupColumn = this.findGroupColumn();
			if (groupColumn.model.pin === pin && !groupColumn.model.isVisible) {
				const nextColumns = dropWhile(this.columnList(pin), c => !c.model.aggregation);
				return [groupColumn].concat(nextColumns);
			}
		}

		return super.columns(node, pin);
	}

	getValue(node, column, select) {
		const rows = this.model.data().rows;
		switch (node.type) {
			case 'group': {
				const aggregation = column.aggregation;
				if (aggregation) {
					if (!Aggregation.hasOwnProperty(aggregation)) {
						throw new AppError(
							'node.visit',
							`Aggregation ${aggregation} is not registered`);
					}

					const groupRows = node.rows.map(i => rows[i]);
					return Aggregation[aggregation](groupRows, select, column.aggregationOptions);
				}

				return null;
			}
			case 'row': {
				const rowIndex = node.rows[0];
				return select(rows[rowIndex], column);
			}
			case 'value': {
				return select(node, column);
			}
			default:
				throw new AppError(
					'node.visit',
					`Invalid node type ${node.type}`
				);
		}
	}

	setValue(node, column, value) {
		if (node.type === 'row') {
			const rows = this.model.data().rows;
			const rowIndex = node.rows[0];
			return setValue(rows[rowIndex], column, value);
		}

		return super.setValue(node, column, value);
	}

	findGroupColumn() {
		return this.columnList().find(c => c.model.type === 'group') || this.reference.group;
	}
}