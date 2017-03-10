import * as columnService from 'core/column/column.service';
import {noop} from 'core/services/utility';

export default (view, cell) => {
	const model = view.model;
	const selection = model.selection();

	switch (selection.unit) {
		case 'row':
			{
				const rows = model.view().rows;
				const row = rows[cell.rowIndex];
				if (row && view.toggleRow.canExecute(row)) {
					return () => view.toggleRow.execute(row);
				} else {
					return noop;
				}
			}
		case 'column':
			{
				const columns = columnService.lineView(model.view().columns);
				const column = columns.find(c => c.model === cell.column).key;
				if (column && view.toggleColumn.canExecute(column)) {
					return () => view.toggleColumn.execute(column);
				} else {
					return noop;
				}
			}
		case 'cell':
			{
				const item = view.root.markup.body.rows[cell.rowIndex].cells[cell.columnIndex];

				if (item && view.toggleCell.canExecute(item)) {
					return () => view.toggleCell.execute(item);
				} else {
					return noop;
				}
			}
		default:
			return noop;
	}
};