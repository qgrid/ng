import {isFunction} from '../services/utility';
import AppError from '../infrastructure/error';

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
	for (let i = 0, length = columns.length; i < length; i++) {
		if (columns[i].key == key) {
			return columns[i];
		}
	}
	throw new AppError('Not Found', `column ${key} is not found`);
}