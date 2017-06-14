import {isUndefined, identity} from '../utility';
import {AppError} from '../infrastructure';
import {getFactory} from '../services/value';

function hashColumnKeyFactory(model) {
	const selectionState = model.selection();
	const selectionKey = selectionState.key;
	if (selectionKey.column === identity) {
		return column => column.key;
	}

	// TODO: investigate if is it necessary to use JSON.stringify here
	return identity;
}

function hashRowKeyFactory(model) {
	const selectionState = model.selection();
	const selectionKey = selectionState.key;
	if (selectionKey.row === identity) {
		const columns = model.data().columns;
		const index = columns.findIndex(column => column.type === 'id');
		if (index >= 0) {
			const idColumn = columns[index];
			const getId = getFactory(idColumn);
			return getId;
		}
		else {
			const rows = model.data().rows;
			return row => rows.indexOf(row);
		}
	}

	// TODO: investigate if is it necessary to use JSON.stringify here
	return identity;
}

function hashKeyFactory(model) {
	const selectionState = model.selection();
	switch (selectionState.unit) {
		case 'row':
			return hashRowKeyFactory(model);
		case 'column':
			return hashColumnKeyFactory(model);
		case 'cell': {
			const hashColumnKey = hashRowKeyFactory(model);
			const hashRowKey = hashRowKeyFactory(model);
			return key => `${hashColumnKey(key.column)}[${hashRowKey(key.row)}]`;
		}
		case 'mix': {
			const hashColumnKey = hashRowKeyFactory(model);
			const hashRowKey = hashRowKeyFactory(model);
			return (key, entry) => {
				switch (entry.unit) {
					case 'column':
						return hashColumnKey(key);
					case 'row':
						return hashRowKey(key);
					case 'cell':
						return `${hashColumnKey(key.column)}[${hashRowKey(key.row)}]`;
					default:
						throw new AppError('selection.service', `Invalid unit ${entry.unit}`);
				}
			};
		}
		default:
			throw new AppError('selection.service', `Invalid unit ${selectionState.unit}`);
	}
}

function cellMatchFactory() {
	return (x, y) => x.column === y.column && x.row === y.row;
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
			case 'column': {
				const selectKey = this.keyFactory('column');
				const columns = data.columns;
				columns.forEach(column => {
					const colKey = selectKey(column);
					const found = items.indexOf(colKey) > -1;
					if (found) {
						entries.push(column);
					}
				});
				break;
			}
			case 'row': {
				const selectKey = this.keyFactory('row');
				const rows = data.rows;
				rows.forEach(row => {
					const rowKey = selectKey(row);
					const found = items.indexOf(rowKey) > -1;
					if (found) {
						entries.push(row);
					}
				});
				break;
			}
			case 'cell': {
				const selectKey = this.keyFactory('cell');
				const match = cellMatchFactory();
				data.columns.forEach(column => {
					data.rows.forEach(row => {
						const cell = {
							column: column,
							row: row
						};

						const index = items.findIndex(item => match(item, selectKey(cell)));
						if (index >= 0) {
							entries.push(cell);
						}
					});
				});
				break;
			}
			case 'mix': {
				const rowKeys = items.filter(key => key.unit === 'row').map(key => key.item);
				const columnKeys = items.filter(key => key.unit === 'column').map(key => key.item);
				const cellKeys = items.filter(key => key.unit === 'cell').map(key => key.item);

				entries.push(...this.lookup(rowKeys, 'row').map(entry => ({item: entry, unit: 'row'})));
				entries.push(...this.lookup(columnKeys, 'column').map(entry => ({item: entry, unit: 'column'})));
				entries.push(...this.lookup(cellKeys, 'cell').map(entry => ({item: entry, unit: 'cell'})));
				break;
			}
			default:
				throw new AppError('selection.state', `Invalid unit ${unit}`);
		}

		return entries;
	}

	map(entries) {
		const selectionState = this.model.selection();
		const selectKey = this.keyFactory();
		switch (selectionState.unit) {
			case 'column':
			case 'row':
			case 'cell':
				return entries.map(selectKey);
			case 'mix':
				return entries.map(entry => ({
					unit: entry.unit,
					item: selectKey(entry)
				}));
			default:
				throw new AppError('selection.state', `Invalid unit ${selectionState.unit}`);
		}
	}

	keyFactory(unit) {
		const selectionState = this.model.selection();
		unit = unit || selectionState.unit;
		switch (unit) {
			case 'column':
			case 'row':
			case 'cell':
				return keySelector(unit, selectionState.key);
			case 'mix': {
				const cellKey = keySelector('cell', selectionState.key);
				const rowKey = keySelector('row', selectionState.key);
				const columnKey = keySelector('column', selectionState.key);

				return entry => {
					switch (entry.unit) {
						case 'column':
							return columnKey(entry.item);
						case 'row':
							return rowKey(entry.item);
						case 'cell':
							return cellKey(entry.item);
						default:
							throw new AppError('selection.service', `Invalid unit ${entry.unit}`);
					}
				};
			}
			default:
				throw new AppError('selection.service', `Invalid unit ${unit}`);
		}
	}

	hashFactory() {
		const selectKey = this.keyFactory();
		const selectHash = hashKeyFactory(this.model);
		return entry => {
			const key = selectKey(entry);
			const hashKey = selectHash(key, entry);
			return hashKey;
		};
	}
}