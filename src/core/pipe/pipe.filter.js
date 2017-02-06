export default function pipeFilter(data, ctx, next) {
	const model = ctx.model;
	const filterState = model.filter();
	const match = filterState.match(ctx);
	const result = [];

	for (let i = 0, length = data.length; i < length; i++) {
		const item = data[i];
		if (match(item)) {
			result.push(item);
		}
	}

	next(result);
}