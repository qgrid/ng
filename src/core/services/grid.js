import Middleware from '../pipe/pipe.middleware';

export default class GridService {
	constructor(model) {
		this.model = model;
	}

	invalidate() {
		const model = this.model;
		const stages = model.data().pipe;
		const middleware = new Middleware(stages);
		const context = {
			model: model,
			source: 'invalidate'
		};
		middleware
			.run(context, model.data().rows)
			.then(result => model.data({rows: result}));
	}
}