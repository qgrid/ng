import * as guard from '../infrastructure/guard';

export default function (data, ctx, next) {
	const model = ctx.model;
	guard.notUndefined(model.filter, 'model.filter');

	const filter = model.filter();
	guard.invokable(filter.match, 'model.filter.match');

	const result = [],
		match = filter.match(ctx);

	for (let i = 0, length = data.length; i < length; i++) {
		const item = data[i];
		if (match(item)) {
			result.push(item);
		}
	}

	next(result);
}
