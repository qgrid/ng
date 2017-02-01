import View from './view';
import {view as columnView} from 'core/column/column.service';
import columnFactory from 'core/column/column.factory';

export default class HeadView extends View {
	constructor(model) {
		super(model);

		this.rows = [];
		model.viewChanged.watch(() => this.invalidate(model));
	}

	static build(model) {
		return (nodes, pivot) => {
			const heads = pivot.heads;
			const columns = [];

			if (model.selection().mode === 'check') {
				const selectColumn = columnFactory('select');
				selectColumn.rowspan = heads.length;
				columns.push(selectColumn);
			}

			if (nodes.length) {
				const groupColumn = columnFactory('group');
				groupColumn.rowspan = heads.length;
				columns.push(columnFactory('group'));
			}

			const dataColumns = model.data().columns;
			if (dataColumns.length) {
				columns.push(...dataColumns
					.map(c => {
						const dataColumn = columnFactory(c.type || 'text', c);
						dataColumn.rowspan = heads.length;
						return dataColumn;
					}));
			}

			if (pivot.heads.length) {
				const rows = [columns];
			}

			return [columns];
		};
	}

	invalidate(model) {
		const columns = model.view().columns;
		this.rows = columns;
	}
}