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
	let length = columns.length;

	while (length--) {
		const column = columns[length];
		if (column.key == key) {
			return column;
		}
	}

	return null;
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
	const viewColumns = columnRows[0].filter(c => c.model.type !== 'pivot');
	const pivotColumns = columnRows[columnRows.length - 1].filter(c => c.model.type === 'pivot');
	return viewColumns.concat(pivotColumns);
}

export function widthFactory(model) {
	const view = model.view;

	return column => {
		switch (column.type) {
			case 'pivot': {
				const width = column.width;
				if (width === 0) {
					return 0;
				}

				if (!width) {
					return null;
				}

				const rowIndex = column.rowIndex;
				if (rowIndex > 0) {
					return null;
				}

				const columnRows = view().columns;
				return columnRows[rowIndex][column.columnIndex].colspan  * column.width + 'px';
			}
			default: {
				const width = column.width;
				return width || width === 0 ? width + 'px' : null;
			}
		}
	};
}