export default function pipeData(data, ctx, next) {
	const model = ctx.model;
	const result = model.data().rows;
	next(Array.from(result));
}
