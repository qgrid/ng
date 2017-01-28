import * as guard from '../infrastructure/guard';

export default class Pipe {
	static get filter() {
		return (data, ctx, next) => {
			let model = ctx.model;
			guard.notUndefined(model.filter, 'model.filter');

			let filter = model.filter();
			guard.invokable(filter.match, 'model.filter.match');

			let result = [];

			for (let i = 0, length = data.length; i < length; i++) {
				var item = data[i];
				if (filter.match(item, ctx)) {
					result.push(item);
				}
			}

			next(result);
		}
	}

	static get pagination() {
		return (data, ctx, next) => {
			let model = ctx.model,
				 pagination = model.pagination(),
				 size = pagination.size,
				 start = pagination.current * size;

			next(data.slice(start, start + size));
		}
	}
}