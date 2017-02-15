import columnFactory from 'core/column/column.factory';
import * as columnService from 'core/column/column.service';
import merge from 'core/services/merge';

const doMerge = merge({
	equals: (l, r) => l.model.key === r.model.key,
	update: (l, r, left, i) => left[i] = r
});

function addSelectColumn(columns, context) {
	const selectColumn = columnFactory('select');
	selectColumn.model.source = 'generation';
	selectColumn.rowspan = context.rowspan;

	selectColumn.key =
		selectColumn.model.key =
			selectColumn.model.key + `[${context.row}][${columns.length}]`;

	columns.push(selectColumn);
	return selectColumn;
}

function addGroupColumn(columns, context) {
	const groupColumn = columnFactory('group');
	groupColumn.model.source = 'generation';
	groupColumn.rowspan = context.rowspan;

	groupColumn.key =
		groupColumn.model.key =
			groupColumn.model.key + `[${context.row}][${columns.length}]`;

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
					dataColumn.rowspan = context.rowspan;
					dataColumn.key = c.key + `[${context.row}][${columns.length + i}]`;
					return dataColumn;
				}),
			model));
	return dataColumns;
}

function addPadColumn(columns, context) {
	const padColumn = columnFactory('pad');
	padColumn.key = padColumn.key + `[${context.row}][${columns.length}]`;
	padColumn.rowspan = context.rowspan;

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
		pivotColumnModel.columnIndex = startIndex + j;

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
			pivotColumnModel.columnIndex = j;

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
	const orderedColumns = Array.from(model.view().columns)[0] || [];
	doMerge(orderedColumns, columns);

	if (heads.length) {
		/*
		 * Add column rows for pivoted data
		 * if pivot is turned on
		 *
		 */

		memo.columns = addPivotColumns(orderedColumns, heads);
	}
	else {
		/*
		 * Add special column type
		 * that fills remaining place (width = 100%)
		 *
		 */
		addPadColumn(orderedColumns, {rowspan: heads.length, row: 0});
		memo.columns = [orderedColumns];
	}

	next(memo);
}