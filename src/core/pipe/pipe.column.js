import columnFactory from 'core/column/column.factory';
import * as columnService from 'core/column/column.service';

export default function pipeColumn(memo, context, next) {
	const model = context.model;
	const pivot = memo.pivot;
	const nodes = memo.nodes;
	const heads = pivot.heads;
	const columns = [];

	if (model.selection().mode === 'check') {
		const selectColumn = columnFactory('select');
		selectColumn.model.source = 'generation';
		selectColumn.rowspan = heads.length;

		selectColumn.key =
			selectColumn.model.key = selectColumn.model.key + `[0][${columns.length}]`;
		columns.push(selectColumn);
	}

	if (nodes.length) {
		const groupColumn = columnFactory('group');
		groupColumn.model.source = 'generation';
		groupColumn.rowspan = heads.length;

		groupColumn.key =
			groupColumn.model.key = groupColumn.model.key + `[0][${columns.length}]`;
		columns.push(groupColumn);
	}

	const dataColumns = model.data().columns;
	if (dataColumns.length) {
		columns.push(...
			columnService.dataView(
				dataColumns
					.map((c, i) => {
						const dataColumn = columnFactory(c.type || 'text', c);
						dataColumn.rowspan = heads.length;
						dataColumn.key = c.key + `[0][${columns.length + i}]`;
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
			pivotColumnModel.title = headColumn.key;
			pivotColumnModel.key = pivotColumnModel.key + `[0][${j}]`;

			pivotColumnModel.rowIndex = 0;
			pivotColumnModel.columnIndex = startIndex + j;

			pivotColumn.key = `${pivotColumnModel.key} of ${heads.length}`;
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
				pivotColumnModel.title = headColumn.key;
				pivotColumnModel.key = pivotColumnModel.key + `[${i}][${j}]`;

				pivotColumnModel.rowIndex = i;
				pivotColumnModel.columnIndex = j;

				pivotColumn.key = `${pivotColumnModel.key} of ${heads.length}`;
				row[j] = pivotColumn;
			}

			rows.push(row);
		}

		memo.columns = rows;
	}
	else {
		// Add special column type that fills remaining place (width = 100%)
		const padColumn = columnFactory('pad');
		padColumn.key = padColumn.key + `[0][${columns.length}]`
		padColumn.rowspan = heads.length;
		columns.push(padColumn);

		memo.columns = [columns];
	}

	next(memo);
}