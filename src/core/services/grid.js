import buildPipe from 'core/pipe/pipe.build';
import Log from 'core/infrastructure/log';
import {noop} from 'core/services/utility';
import guid from 'core/services/guid';

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

		const cancelBusy = this.busy();
		const run = buildPipe(model, this.valueFactory);
		return run(source, changes, pipe)
			.then(this.apply)
			.then(cancelBusy)
			.catch(cancelBusy);
	}

	busy() {
		const id = guid();
		const progress = this.model.progress;
		progress({queue: progress().queue.concat([id])});
		return () => {
			const queue = Array.from(progress().queue);
			const index = queue.indexOf(id);
			if (index >= 0) {
				queue.splice(index, 1);
				progress({queue: queue});
			}
		};
	}
}