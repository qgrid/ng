import buildPipe from 'core/pipe/pipe.build';
import Log from 'core/infrastructure/log';
import {noop} from 'core/services/utility';

export default class GridService {
	constructor(model, valueFactory, apply = noop) {
		this.model = model;
		this.valueFactory = valueFactory;
		this.apply = apply;
	}

	invalidate(source = 'invalidate', changes = {}, pipe = null) {
		Log.info('invalidate', source);

		const model = this.model;
		model.head().cache.clear();
		model.body().cache.clear();
		model.foot().cache.clear();

		model.progress({isBusy: true});
		const run = buildPipe(model, this.valueFactory);
		return run(source, changes, pipe)
			.then(this.apply)
			.then(() => model.progress({isBusy: false}))
			.catch(() => model.progress({isBusy: false}));
	}
}