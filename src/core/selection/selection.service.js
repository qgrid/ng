import {isUndefined} from '../utility';
import {AppError} from '../infrastructure';

function stringifyCellKey(key) {
	return `${key.column}[${key.row}]`;
}

function keySelector(unit, selector) {
	switch (unit) {
		case 'row':
			return selector.row;
		case 'column':
			return selector.column;
		case 'cell':
			return entry => ({
				row: selector.row(entry.row),
				column: selector.column(entry.column)
			});
		default:
			throw new AppError('selection.state', `Invalid unit ${unit}`);
	}
}

export class SelectionService {
	constructor(model) {
		this.model = model;
	}

	lookup(items, unit) {
		const entries = [];
		if (items.length === 0) {
			return entries;
		}

		const model = this.model;
		if (isUndefined(unit)) {
			unit = model.selection().unit;
		}

		const data = model.data();
		switch (unit) {
			case 'row': {
				const rows = data.rows;
				const key = this.keyFactory();
				rows.forEach(row => {
					const rowKey = key(row);
					const found = items.indexOf(rowKey) > -1;
					if (found) {
						entries.push(row);
					}
				});
				break;
			}
			case 'column': {
				const columns = data.columns;
				const key = this.keyFactory();
				columns.forEach(column => {
					const colKey = key(column);
					const found = items.indexOf(colKey) > -1;
					if (found) {
						entries.push(column);
					}
				});
				break;
			}
			case 'cell': {
				const cells = [];
				data.columns.forEach(column => {
					data.rows.forEach(row => {
						cells.push({
							column: column,
							row: row
						});
					});
				});

				cells.forEach(cell => {
					const key = this.keyFactory();
					const cellKey = key(cell);
					const found = items.findIndex(item => stringifyCellKey(item) === cellKey) > -1;
					if (found) {
						entries.push(cell);
					}
				});
				break;
			}
			case 'mix': {
				const rowKeys = items
					.filter(key => key.unit === 'row')
					.map(key => key.item);
				const colKeys = items
					.filter(key => key.unit === 'column')
					.map(key => key.item);
				const cellKeys = items
					.filter(key => key.unit === 'cell')
					.map(key => key.item);

				this.lookup(rowKeys, 'row')
					.concat(this.lookup(colKeys, 'column'))
					.concat(this.lookup(cellKeys, 'cell'));
				break;
			}
			default:
				throw new AppError('selection.state', `Invalid unit ${unit}`);
		}

		return entries;
	}

	keyFactory() {
		const selection = this.model.selection();
		const unit = selection.unit;

		const getCellKey = (item, unit) => {
			if (item.column && item.row) {
				const key = keySelector(unit, selection.key)(item);
				return stringifyCellKey(key);
			}

			return item;
		};

		switch (unit) {
			case 'cell':
				return item => getCellKey(item, unit);
			case 'row':
			case 'column':
				return keySelector(unit, selection.key);
			case 'mix':
				return item => {
					if (item.item) {
						if (item.unit === 'cell') {
							return getCellKey(item.item, item.unit);
						}

						if (item.unit === 'row' || item.unit === 'column') {
							return keySelector(item.unit, selection.key)(item.item);
						}

						return item.item;
					}

					return item;
				};
			default:
				throw new AppError('selection.service', `Invalid selection unit ${unit}`);
		}
	}
}