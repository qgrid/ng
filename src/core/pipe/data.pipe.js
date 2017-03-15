export default function pipeData(data, context, next) {
	const model = context.model;
	const result = data.length ? data : model.data().rows;
	next(Array.from(result));
}
