import Middleware from 'core/services/middleware';

export default function build(model, valueFactory) {
	return function run(source, changes) {
		const pipes = model.data().pipe;
		const middleware = new Middleware(pipes);
		const context = {
			model: model,
			source: source,
			valueFactory: valueFactory,
			changes: changes
		};

		// TODO: add progress
		return middleware
			.run(context);
	};
}