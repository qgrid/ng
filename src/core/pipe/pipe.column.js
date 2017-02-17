import columnFactory from 'core/column/column.factory';
import * as columnService from 'core/column/column.service';

function addSelectColumn(columns, context) {
	const selectColumn = columnFactory('select');
	const index = columns.length;
	selectColumn.model.source = 'generation';
	selectColumn.rowspan = context.rowspan;

	selectColumn.key =
		selectColumn.model.key =
			selectColumn.model.key + `[${context.row}][${index}]`;

	if (selectColumn.model.index >= 0) {
		selectColumn.model.index = index;
	}

	columns.push(selectColumn);
	return selectColumn;
}

function addGroupColumn(columns, context) {
	const groupColumn = columnFactory('group');
	const index = columns.length;
	groupColumn.model.source = 'generation';
	groupColumn.rowspan = context.rowspan;

	groupColumn.key =
		groupColumn.model.key =
			groupColumn.model.key + `[${context.row}][${index}]`;

	if (groupColumn.model.index < 0) {
		groupColumn.model.index = index;
	}

	columns.push(groupColumn);
	return groupColumn;
}

function addDataColumns(columns, model, context) {
	const dataColumns = model.data().columns;
	columns.push(...
		columnService.dataView(
			dataColumns
				.map((c, i) => {
					const dataColumn = columnFactory(c.type || 'text', c);
					const index = columns.length + i;
					dataColumn.rowspan = context.rowspan;
					dataColumn.key = c.key + `[${context.row}][${index}]`;

					if (dataColumn.model.index < 0) {
						dataColumn.model.index = index;
					}

					return dataColumn;
				}),
			model));
	return dataColumns;
}

function addPadColumn(columns, context) {
	const padColumn = columnFactory('pad');
	const index = columns.length;
	padColumn.key = padColumn.key + `[${context.row}][${index}]`;
	padColumn.rowspan = context.rowspan;

	if (padColumn.model.index < 0) {
		padColumn.model.index = index;
	}

	columns.push(padColumn);
	return padColumn;
}

function addPivotColumns(columns, heads) {
	const rows = [columns];

	/*
	 * Data columns + first row pivot columns
	 *
	 */
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
		pivotColumnModel.index = startIndex + j;

		pivotColumn.key = `${pivotColumnModel.key} of ${heads.length}`;
		row[j] = pivotColumn;
	}

	const firstRow = rows[0];
	firstRow.push(...row);

	/*
	 * Add special column type
	 * that fills remaining place (width = 100%)
	 *
	 */
	addPadColumn(firstRow, {rowspan: 1, row: 0});

	/*
	 * Next rows pivot columns
	 *
	 */
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
			pivotColumnModel.index = j;

			pivotColumn.key = `${pivotColumnModel.key} of ${heads.length}`;
			row[j] = pivotColumn;
		}

		/*
		 * Add special column type
		 * that fills remaining place (width = 100%)
		 *
		 */
		addPadColumn(row, {rowspan: 1, row: i});

		rows.push(row);
	}

	return rows;
}

export default function pipeColumn(memo, context, next) {
	const model = context.model;
	const pivot = memo.pivot;
	const nodes = memo.nodes;
	const heads = pivot.heads;
	const columns = [];

	/*
	 * Add column with select boxes
	 * if selection unit is row
	 *
	 */
	if (model.selection().unit === 'row') {
		addSelectColumn(columns, {rowspan: heads.length, row: 0});
	}

	/*
	 * Add group column with nodes
	 *
	 */
	if (nodes.length) {
		addGroupColumn(columns, {rowspan: heads.length, row: 0});
	}

	/*
	 * Add columns defined by user
	 * that are visible
	 *
	 */
	addDataColumns(columns, model, {rowspan: heads.length, row: 0});


	/*
	 * Persist order of draggable columns
	 *
	 */
	columns.sort((x, y) => x.model.index - y.model.index);

	if (heads.length) {
		/*
		 * Add column rows for pivoted data
		 * if pivot is turned on
		 *
		 */

		memo.columns = addPivotColumns(columns, heads);
	}
	else {
		/*
		 * Add special column type
		 * that fills remaining place (width = 100%)
		 *
		 */
		addPadColumn(columns, {rowspan: heads.length, row: 0});
		memo.columns = [columns];
	}

	next(memo);
}