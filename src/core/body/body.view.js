import {View} from '../view';
import * as columnService from '../column/column.service';
import {Aggregation} from '../services';
import {AppError, Log} from '../infrastructure';
import {Node} from '../node';
import {RowDetails} from '../row-details';
import {getFactory as valueFactory, set as setValue} from '../services/value';
import {getFactory as labelFactory, set as setLabel} from '../services/label';
import * as NodeService from '../node/node.service';
import {columnFactory} from '../column/column.factory';

export class BodyView extends View {
	constructor(model, table) {
		super(model);

		this.table = table;
		this.rows = [];
		this.state = {
			columns: [],
			hasDataRow: false
		};

		const createColumn = columnFactory(model);
		this.reference = {
			group: createColumn('group')
		};

		this.using(model.viewChanged.watch(() => this.invalidate(model)));
	}

	invalidate(model) {
		Log.info('view.body', 'invalidate');

		this.invalidateRows(model);
		this.invalidateColumns(model);
	}

	invalidateRows(model) {
		this.state.hasDataRow = false;
		const viewState = model.view();
		this.table.view.removeLayer('blank');
		this.rows = viewState.rows;
		if (!this.rows.length) {
			const layerState = model.layer();
			if (layerState.resource.data.hasOwnProperty('blank')) {
				const layer = this.table.view.addLayer('blank');
				layer.resource('blank', layerState.resource);
			}
		}
		else {
			if (viewState.nodes.length) {
				this.state.hasDataRow = NodeService.some(viewState.nodes, node => node.type !== 'group');
			}
			else {
				this.state.hasDataRow = true;
			}
		}
	}

	invalidateColumns(model) {
		const columns = model.view().columns;
		this.state.columns = columnService.lineView(columns);
	}

	colspan(row, column, pin) {
		const columnModel = column.model;
		if (row instanceof RowDetails) {
			if (columnModel.type === 'row-details') {
				return this.columnList(pin).length;
			}
		}

		if (row instanceof Node) {
			if (row.type === 'group') {
				return this.columnList(pin).length;
			}
		}

		return column.colspan;
	}

	rowspan() {
		return 1;
	}

	columns(row, pin) {
		if (row instanceof RowDetails) {
			return [row.column];
		}

		if (row instanceof Node && row.type === 'group') {
			const groupColumn = this.columnList().find(c => c.model.type === 'group') || this.reference.group;
			if (groupColumn.model.pin === pin) {
				return [groupColumn];
			}
		}

		return this.columnList(pin);
	}

	columnList(pin) {
		const columns = this.state.columns;
		if (arguments.length) {
			return columns.filter(c => c.model.pin === pin);
		}

		return columns;
	}

	valueFactory(column, getValueFactory = null) {
		const model = this.model;
		const getValue = (getValueFactory || valueFactory)(column);

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
							return Aggregation[aggregation](groupRows, getValue, column.aggregationOptions);
						}

						return null;
					}
					case 'row': {
						const rowIndex = node.rows[0];
						return getValue(rows[rowIndex], column);
					}
					case 'value': {
						return getValue(node, column);
					}
					default:
						throw new AppError(
							'view.body',
							`Invalid node type ${node.type}`
						);
				}
			}

			if (row instanceof RowDetails) {
				return null;
			}

			return getValue(row);
		};
	}

	labelFactory(column) {
		return this.valueFactory(column, labelFactory);
	}

	value(row, column, value) {
		if (arguments.length == 3) {
			if (row instanceof Node) {
				const node = row;
				if (node.type === 'row') {
					const rows = this.model.data().rows;
					const rowIndex = node.rows[0];
					return setValue(rows[rowIndex], column, value);
				}
			}

			setValue(row, column, value);
			return;
		}

		const getValue = this.valueFactory(column);
		return getValue(row);
	}

	label(row, column, value) {
		if (arguments.length === 3) {
			setLabel(row, column, value);
			return;
		}

		const getLabel = this.labelFactory(column);
		return getLabel(row);
	}
}
