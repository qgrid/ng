import View from 'core/view/view';
import Log from 'core/infrastructure/log';
import * as columnService from 'core/column/column.service';

export default class HeadView extends View {
	constructor(model) {
		super(model);

		this.rows = [];
		this.width = columnService.widthFactory(this.model);

		model.viewChanged.watch(() => this.invalidate(model));
	}

	invalidate(model) {
		Log.info('view.head', 'invalidate');

		const columns = model.view().columns;
		this.rows = columns;
	}
}