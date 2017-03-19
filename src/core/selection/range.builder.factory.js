import * as columnService from 'core/column/column.service';
import AppError from 'core/infrastructure/error';

export default (model) => {
	function getRangeRows(startCell, endCell) {
		const rows = model.view().rows;

		if (!endCell) {
			return [rows[startCell.rowIndex]];
		} else {
			const startIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
			const endIndex = Math.max(startCell.rowIndex, endCell.rowIndex);
			return rows.slice(startIndex, endIndex + 1);
		}
	}

	function getRangeColumns(startCell, endCell) {
		const columns = columnService.lineView(model.view().columns);

		if (!endCell) {
			return [columns.find(c => c.model === startCell.column).model];
		} else {
			const startIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
			const endIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

			return columns.slice(startIndex, endIndex + 1).map(x => x.model);
		}
	}

	function getRangeCells(startCell, endCell) {
		if (!endCell) {
			return [{
				column: startCell.column,
				row: startCell.row
			}];
		} else {
			const rows = model.view().rows;
			const columns = columnService.lineView(model.view().columns);

			const startRowIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
			const endRowIndex = Math.max(startCell.rowIndex, endCell.rowIndex);

			const startColumnIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
			const endColumnIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

			const rowsSelected = rows.slice(startRowIndex, endRowIndex + 1);
			const columnsSelected = columns.slice(startColumnIndex, endColumnIndex + 1);

			const items = [];
			rowsSelected.forEach((row) => {
				columnsSelected
					.filter(column => column.model.type !== 'row-indicator')
					.forEach((column) => {
						items.push({
							column: column.model,
							row: row
						});
					});
			});

			return items;
		}
	}

	function getRangeMixed(startCell, endCell) {
		const mixedUnit = startCell.column.type === 'row-indicator' ? 'row' : 'cell';
		return (mixedUnit === 'row'
				? getRangeRows(startCell, endCell)
				: getRangeCells(startCell, endCell)).map(item => {
					return {
						item: item,
						unit: mixedUnit
					};
				});
	}

	const selection = model.selection();
	switch (selection.unit) {
		case 'row':
			return getRangeRows;
		case 'column':
			return getRangeColumns;
		case 'cell':
			return getRangeCells;
		case 'mixed':
			return getRangeMixed;
		default:
			throw new AppError('range.builder', `unsupported unit ${selection.unit}`);
	}
};