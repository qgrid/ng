import {getValue} from '../column/column.service';
import {orderBy} from '../services/utility';
import {key as getKey, direction as getDirection} from '../sort/sort.service';
import {find} from '../column/column.service';

export default function (data, ctx, next) {
	const values = [],
		directions = [],
		model = ctx.model,
		dataModel = model.data(),
		columns = dataModel.columns,
		sort = model.sort(),
		by = sort.by;

	for (let i = 0, length = by.length; i < length; i++) {
		let item = by[i],
			key = getKey(item),
			value = getDirection(item),
			column = find(columns, key);

		values.push(getValue(column));
		directions.push(value);
	}

	const result = orderBy(data, values, directions);

	next(result);
}

