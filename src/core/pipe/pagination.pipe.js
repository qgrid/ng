export default function pipePagination(data, context, next) {
	const model = context.model;
	const paginationState = model.pagination();
	const size = paginationState.size;
	const current = paginationState.current;
	const start = current * size;

	model.pagination({count: data.length});
	next(data.slice(start, start + size));
}