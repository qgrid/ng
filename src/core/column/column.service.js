import {isFunction} from '../services/utility';

export function map(columns) {
	return columns.reduce((memo, column) => {
		memo[column.key] = column;
		return memo;
	}, {});
}

export function getValue(column) {
	return isFunction(column.value)
		? row => column.value(row)
		: row => row[column.key];
}

export function find(columns, key) {
	const index = findIndex(columns, key);
	return index < 0 ? null : columns[index];
}

export function findIndex(columns, key) {
	let length = columns.length;
	while (length--) {
		const column = columns[length];
		if (column.key == key) {
			return length;
		}
	}

	return -1;
}

export function findView(columns, key) {
	let length = columns.length;

	while (length--) {
		const column = columns[length];
		if (column.model.key == key) {
			return column;
		}
	}

	return null;
}

export function dataView(columns, model) {
	const groupBy = new Set(model.group().by);
	const pivotBy = new Set(model.pivot().by);
	return columns.filter(c => !groupBy.has(c.model.key) && !pivotBy.has(c.model.key) && c.model.isVisible !== false);
}

export function lineView(columnRows) {
	if (columnRows.length) {
		const viewColumns = columnRows[0].filter(c => c.model.type !== 'pivot');
		const pivotColumns = columnRows[columnRows.length - 1].filter(c => c.model.type === 'pivot');
		return viewColumns.concat(pivotColumns);
	}

	return [];
}

export function widthFactory(model) {
	const layout = model.layout;
	const columns = layout().columns;
	return column => {
		if (columns.hasOwnProperty(column.key)) {
			return columns[column.key].width;
		}

		const width = column.width;
		return width || width === 0 ? width : null;
	};
}