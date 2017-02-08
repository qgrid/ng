import View from './view';
import * as columnService from 'core/column/column.service';
import Aggregation from 'core/services/aggregation';
import AppError from 'core/infrastructure/error';
import Log from 'core/infrastructure/log';
import Node from 'core/node/node'

export default class BodyView extends View {
	constructor(model, valueFactory) {
		super(model);

		this.rows = [];
		this.columns = [];
		this._valueFactory = valueFactory;

		model.viewChanged.watch(() => this.invalidate(model));
	}

	invalidate(model) {
		Log.info('view.body', 'invalidate');

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

	valueFactory(column) {
		const model = this.model;
		const getValue = this._valueFactory(column);

		return row => {
			if (row instanceof Node) {
				const node = row;
				const rows = model.data().rows;
				switch (node.type) {
					case 'group': {
						const aggregation = column.aggregation;
						if (aggregation) {
							if (!Aggregation.hasOwnProperty(aggregation)) {
								throw new AppError(
									'view.body',
									`Aggregation ${aggregation} is not registered`);
							}

							const groupRows = node.rows.map(i => rows[i]);
							return Aggregation[aggregation](groupRows, getValue);
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
		};
	}

	value(row, column) {
		const getValue = this.valueFactory(column);
		return getValue(row);
	}
}