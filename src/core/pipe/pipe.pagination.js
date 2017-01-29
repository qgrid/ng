export default function (data, ctx, next) {
	let model = ctx.model,
		pagination = model.pagination(),
		size = pagination.size,
		start = pagination.current * size;

	next(data.slice(start, start + size));
}