import buildPipe from 'core/pipe/pipe.build';
import Log from 'core/infrastructure/log';
import {noop} from 'core/services/utility';

export default class GridService {
	constructor(model, valueFactory, apply = noop) {
		this.model = model;
		this.valueFactory = valueFactory;
		this.apply = apply;
	}

	invalidate(source = 'invalidate', changes = {}) {
		Log.info('invalidate', source);

		const model = this.model;
		model.head().cache.clear();
		model.body().cache.clear();
		model.foot().cache.clear();

		const run = buildPipe(model, this.valueFactory);
		return run(source, changes)
			.then(this.apply);
	}
}