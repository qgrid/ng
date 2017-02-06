import buildPipe from 'core/pipe/pipe.build';
import Log from 'core/infrastructure/log';

export default class GridService {
	constructor(model, valueFactory) {
		this.model = model;
		this.valueFactory = valueFactory;
	}

	invalidate(source = 'invalidate', changes = {}) {
		Log.info('invalidate', source);

		const run = buildPipe(this.model, this.valueFactory);
		return run(source, changes);
	}
}