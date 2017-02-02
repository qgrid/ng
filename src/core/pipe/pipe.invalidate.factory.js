import Middleware from './pipe.middleware';

export function pipeInvalidateFactory(model) {
	return function (source, diff) {
		const stages = model.data().pipe;
		const middleware = new Middleware(stages);
		const context = {
			model: model,
			source: source,
			diff: diff
		};
		middleware
			.run(context, model.data().rows)
			.then(result => model.data({rows: result}));
	};
}