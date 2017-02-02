import {isFunction} from 'core/services/utility';
import AppError from 'core/infrastructure/error';

export function get(row, column) {
	return row.value && isFunction(row.value)
		? row.value(column)
		: column.$value
			? column.$value({$row: row})
			: column.value
				? column.value(row)
				: row[column.key];
}

export function getFactory(column) {
	const get = column.$value
		? row => column.$value({$row: row})
		: column.value
			? row => column.value(row)
			: row => row[column.key];

	return row => get(row);
}

export function set(row, column, value) {
	if (isFunction(column.$value)) {
		column.$value({$row: row, $value: value});
		return;
	}

	if (isFunction(column.value)) {
		column.value(row, value);
		return;
	}

	if (row.hasOwnProperty(column.key)) {
		row[column.key] = value;
		return;
	}

	throw  new AppError('value', `Row can't be edit on "${column.key}" column`);
}