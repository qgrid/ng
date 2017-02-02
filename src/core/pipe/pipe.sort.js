import AppError from '../infrastructure/error';
import {getValue} from '../column/column.service';
import {orderBy} from '../services/utility';
import {key as getKey, direction as getDirection} from '../sort/sort.service';
import {find} from '../column/column.service';

export default function (data, ctx, next) {
	const values = [];
	const directions = [];
	const model = ctx.model;
	const dataState = model.data();
	const columns = dataState.columns;
	const sort = model.sort();
	const by = sort.by;

	for (let i = 0, length = by.length; i < length; i++) {
		let item = by[i],
			key = getKey(item),
			value = getDirection(item),
			column = find(columns, key);

		if (!column) {
			throw new AppError('column.service', `Column "${key}" is not found`);
		}

		values.push(getValue(column));
		directions.push(value);
	}

	const result = orderBy(data, values, directions);

	next(result);
}

