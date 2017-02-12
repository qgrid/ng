import columnFactory from 'core/column/column.factory';
import * as columnService from 'core/column/column.service';

export default function pipeColumn(memo, context, next) {
	const model = context.model;
	const pivot = memo.pivot;
	const nodes = memo.nodes;
	const heads = pivot.heads;
	const columns = [];

	if (model.selection().mode === 'checkbox') {
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

		const head = heads[0];
		const headLength = head.length;
		const row = new Array(headLength);
		const startIndex = columns.length;
		for (let j = 0; j < headLength; j++) {
			const headColumn = head[j];
			const pivotColumn = columnFactory('pivot');
			pivotColumn.colspan = headColumn.value;
			const pivotColumnModel = pivotColumn.model;
			pivotColumnModel.key = pivotColumnModel.key + `[0][${j}]`;
			pivotColumnModel.title = headColumn.key;
			pivotColumnModel.rowIndex = 0;
			pivotColumnModel.columnIndex = startIndex + j;
			row[j] = pivotColumn;
		}
		rows[0].push(...row);

		for (let i = 1, length = heads.length; i < length; i++) {
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
				pivotColumnModel.rowIndex = i;
				pivotColumnModel.columnIndex = j;
				row[j] = pivotColumn;
			}

			rows.push(row);
		}

		memo.columns = rows;
	}
	else {
		// Add special column type that fills remaining place (width = 100%)
		const padColumn = columnFactory('pad');
		padColumn.rowspan = heads.length;
		columns.push(padColumn);

		memo.columns = [columns];
	}

	next(memo);
}