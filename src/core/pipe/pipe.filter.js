export default function (data, ctx, next) {
	const model = ctx.model;
	const filter = model.filter();
	const result = [];
	const match = filter.match(ctx);

	for (let i = 0, length = data.length; i < length; i++) {
		const item = data[i];
		if (match(item)) {
			result.push(item);
		}
	}

	next(result);
}
