export default function pipePagination(data, context, next) {
	const model = context.model;
	const pagination = model.pagination();
	const size = pagination.size;
	const start = (pagination.current || 0) * size;

	next(data.slice(start, start + size));
}