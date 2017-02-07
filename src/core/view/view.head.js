import View from './view';
import Log from 'core/infrastructure/log';

export default class HeadView extends View {
	constructor(model) {
		super(model);

		this.rows = [];
		model.viewChanged.watch(() => this.invalidate(model));
	}

	invalidate(model) {
		Log.info('view.head', 'invalidate');

		const columns = model.view().columns;
		this.rows = columns;
	}
}