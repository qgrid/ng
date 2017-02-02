import Middleware from './pipe.middleware';

export function pipeInvalidateFactory(model, valueFactory) {
	return function (source, diff) {
		const stages = model.data().pipe;
		if (stages.length) {
			const middleware = new Middleware(stages);
			const context = {
				model: model,
				source: source,
				valueFactory: valueFactory,
				diff: diff
			};
			middleware
				.run(context, model.data().rows)
				.then(result => model.data({rows: result}));
		}
	};
}