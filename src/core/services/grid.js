import Middleware from '../pipe/pipe.middleware';

export default class GridService {
	constructor(model) {
		this.model = model;
	}

	invalidate() {
		const model = this.model;
		const stages = model.data().pipe;
		const ctx = {
			model: model,
			source: 'invalidate'
		};
		const middleware = new Middleware(stages);
		middleware
			.run(ctx, model.data().rows)
			.then(result => model.data({rows: result}));
	}
}