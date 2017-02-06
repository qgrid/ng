import View from './view';
import columnFactory from 'core/column/column.factory';
import * as columnService from 'core/column/column.service';
import Log from 'core/infrastructure/log';

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
				selectColumn.model.key = selectColumn.model.key + `[0][${columns.length}]`;
				selectColumn.model.source = 'generation';
				selectColumn.rowspan = heads.length;
				columns.push(selectColumn);
			}

			if (nodes.length) {
				const groupColumn = columnFactory('group');
				groupColumn.model.key = groupColumn.model.key + `[0][${columns.length}]`;
				groupColumn.model.source = 'generation';
				groupColumn.rowspan = heads.length;
				columns.push(groupColumn);
			}

			const dataColumns = model.data().columns;
			if (dataColumns.length) {
				columns.push(...
					columnService.dataView(
						dataColumns
							.map(c => {
								const dataColumn = columnFactory(c.type || 'text', c);
								dataColumn.rowspan = heads.length;
								return dataColumn;
							}),
						model));
			}

			if (heads.length) {
				const rows = [columns];
				for (let i = 0, length = heads.length; i < length; i++) {
					const head = heads[i];
					const headLength = head.length;
					const row = new Array(headLength);
					for (let j = 0; j < headLength; j++) {
						const headColumn = head[j];
						const pivotColumn = columnFactory('pivot');
						pivotColumn.colspan = headColumn.value;
						const pivotColumnModel = pivotColumn.model;
						pivotColumnModel.key = pivotColumnModel.key + `[${i}][${j}]`;
						pivotColumnModel.title = headColumn.key;
						pivotColumnModel.source = 'generation';
						pivotColumnModel.rowIndex = i;
						pivotColumnModel.columnIndex = j;
						row[j] = pivotColumn;
					}

					if (i === 0) {
						rows[0].push(...row);
					}
					else {
						rows.push(row);
					}
				}

				return rows;
			}

			return [columns];
		};
	}

	invalidate(model) {
		Log.info('view.head', 'invalidate');

		const columns = model.view().columns;
		this.rows = columns;
	}
	
	width(column) {
		return column.width || 100;
	}
}