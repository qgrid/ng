import View from './view';
import {view as columnView} from 'core/column/column.service';

export default class BodyView extends View {
	constructor(model) {
		super(model);

		this.rows = [];
		this.columns = [];
		model.viewChanged.watch(() => this.invalidate(model));
	}

	invalidate(model) {
		this.invalidateRows(model);
		this.invalidateColumns(model);
	}

	invalidateRows(model) {
		this.rows = model.view().rows;
	}

	invalidateColumns(model) {
		const columns = columnView(model.view().columns, model);
		this.columns = columns;
	}
}