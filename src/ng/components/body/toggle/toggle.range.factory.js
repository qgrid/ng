import * as columnService from 'core/column/column.service';
import {noop} from 'core/services/utility';

export default (view, startCell, endCell) => {
	const model = view.model;
	const selection = model.selection();

	switch (selection.unit) {
		case 'row':
			{
				const rows = model.view().rows;

				const startIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
				const endIndex = Math.max(startCell.rowIndex, endCell.rowIndex);
				const items = rows.slice(startIndex, endIndex + 1);

				if (items && view.selection.toggleRow.canExecute(items)) {
					return () => {
						view.selection.deselectAll.execute();
						view.selection.toggleRow.execute(items, true)
					};
				} else {
					return noop;
				}
			}
		case 'column':
			{
				const startIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
				const endIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

				const columns = columnService.lineView(model.view().columns);
				const items = columns.slice(startIndex, endIndex + 1).map(x => x.key);

				if (items && view.selection.toggleColumn.canExecute(items)) {
					return () => {
						view.selection.deselectAll.execute();
						view.selection.toggleColumn.execute(items, true)
					};
				} else {
					return noop;
				}
			}
		case 'cell':
			{
				const startRowIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
				const endRowIndex = Math.max(startCell.rowIndex, endCell.rowIndex);

				const startColumnIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
				const endColumnIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

				const rows = Array.from(view.root.markup.body.rows).slice(startRowIndex, endRowIndex + 1);

				const items = rows
					.map(row => Array.from(row.cells).slice(startColumnIndex, endColumnIndex + 1))
					.reduce((agg, row) => [...agg, ...row]);

				if (items && view.selection.toggleCell.canExecute(items)) {
					return () => {
						view.selection.deselectAll.execute();
						view.selection.toggleCell.execute(items, true)
					};
				} else {
					return noop;
				}
			}
		default:
			return noop;
	}
};