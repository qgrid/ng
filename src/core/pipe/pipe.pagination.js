export default function (data, ctx, next) {
	const model = ctx.model;
	const pagination = model.pagination();
	const size = pagination.size;
	const start = (pagination.current || 0) * size;

	next(data.slice(start, start + size));
}