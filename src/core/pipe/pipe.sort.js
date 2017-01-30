import {getValue} from '../column/column.service';
import {orderBy} from '../services/utility';

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
			key = Object.keys(item)[0],
			value = item[key],
			column = columns.find(c => c.key == key);

		values.push(getValue(column));
		directions.push(value);
	}

	const result = orderBy(data, values, directions);

	next(result);
}

