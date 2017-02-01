import View from './view';
import * as columnService from 'core/column/column.service';
import Aggregation from 'core/services/aggregation';
import AppError from 'core/infrastructure/error';
import {flatView as nodeFlatView} from 'core/node/node.service';

export default class BodyView extends View {
	constructor(model, valueFactory) {
		super(model);

		this.rows = [];
		this.columns = [];
		this.valueFactory = valueFactory;

		model.viewChanged.watch(() => this.invalidate(model));
	}

	static build(model) {
		return (nodes, pivot) => {
			if (nodes.length) {
				return nodeFlatView(nodes);
			}

			const rows = model.data().rows;
			return Array.from(rows);
		};
	}

	invalidate(model) {
		this.invalidateRows(model);
		this.invalidateColumns(model);
	}

	invalidateRows(model) {
		this.rows = model.view().rows;
	}

	invalidateColumns(model) {
		const columns = model.view().columns;
		this.columns = columnService.lineView(columns);
	}

	value(row, column) {
		const model = this.model;
		const getValue = this.valueFactory(column);
		const groupBy = model.group().by;
		if (groupBy.length) {
			const node = row;
			const rows = model.data().rows;
			switch (node.type) {
				case 'group': {
					if (column.aggregation) {
						if (!Aggregation.hasOwnProperty(column.aggregation)) {
							throw new AppError(
								'view.body',
								`Aggregation ${column.aggregation} is not registered`);
						}

						return Aggregation[column.aggregation](node.rows.map(i => rows[i]), getValue);
					}

					return null;
				}
				case 'row': {
					const rowIndex = node.rows[0];
					return getValue(rows[rowIndex], column);
				}
				default:
					throw new AppError(
						'view.body',
						`Invalid node type ${node.type}`
					);
			}

		}

		return getValue(row);
	}
}