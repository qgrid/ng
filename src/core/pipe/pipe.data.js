export default function pipeData(data, context, next) {
	const model = context.model;
	const result = model.data().rows;
	next(Array.from(result));
}
