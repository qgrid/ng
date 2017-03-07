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
				if (row && view.selection.toggleRow.canExecute(row)) {
					return () => view.selection.toggleRow.execute(row);
				} else {
					return noop;
				}
			}
		case 'column':
			{
				const columns = columnService.lineView(model.view().columns);
				const column = columns.find(c => c.model === cell.column).key;
				if (column && view.selection.toggleColumn.canExecute(column)) {
					return () => view.selection.toggleColumn.execute(column)
				} else {
					return noop;
				}
			}
		case 'cell':
			{
				if (cell && view.selection.toggleCell.canExecute(cell)) {
					return () => view.selection.toggleCell.execute(cell);
				} else {
					return noop;
				}
			}
		default:
			return noop;
	}
};