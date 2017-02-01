import View from './view';
import {view as columnView} from 'core/column/column.service';

export default class FootView extends View {
	constructor(model) {
		super(model);

		this.rows = [];
		model.viewChanged.watch(() => this.invalidate(model));
	}

	invalidate(model) {
		const columns = columnView(model.view().columns, model);
		const row = {columns: columns};
		this.rows = new Array(this.count).fill(row);
	}

	get count() {
		const model = this.model;
		const columns = model.data().columns;
		const resourceCount = model.foot().resource.count;

		for (let i = 0, length = columns.length; i < length; i++) {
			if (columns[i].hasOwnProperty('aggregation')) {
				return Math.max(resourceCount, 1);
			}
		}

		return resourceCount;
	}
}