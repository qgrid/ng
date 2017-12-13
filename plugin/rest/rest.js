import {PipeUnit} from '@grid/core/pipe/pipe.unit';
import {assignWith} from '@grid/core/utility';
import {AppError} from '@grid/core/infrastructure';
import {PluginView} from '../plugin.view';

export class Rest extends PluginView {
	constructor(model, config) {
		super(model);

		const settings = assignWith({
			method: 'get',
		}, config);

		if (!this.url) {
			throw new AppError('rest', 'REST endpoint URL is required');
		}



		model.data({
			pipe: [
				(data, context, next) => {
					fetch()
						.then(data => next(data));
					// $http.get('/path/to/data', model.sort().by, model.filter().by, model.pagination().current)
					// 	.then(response => {
					// 		next(response.data);
					// 	});
				},
				...PipeUnit.view
			]
		});
	}
}
