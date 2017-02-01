import View from './view';
import {view as columnView} from 'core/column/column.service';

export default class HeadView extends View {
	constructor(model) {
		super(model);

		this.rows = [];
		model.viewChanged.watch(() => this.invalidate(model));
	}

	invalidate(model) {
		const columns = columnView(model.view().columns, model);
		const row = {columns: columns};
		this.rows = [row];
	}
}