import * as columnService from 'core/column/column.service';

export default class TableView {
	constructor(model) {
		this.model = model;
	}

	getRows(startCell, endCell) {
		if (!endCell) {
			return [this.rows[startCell.rowIndex]];
		} else {
			const startIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
			const endIndex = Math.max(startCell.rowIndex, endCell.rowIndex);
			return this.rows.slice(startIndex, endIndex + 1);
		}
	}

	getColumns(startCell, endCell) {
		if (!endCell) {
			return [this.columns.find(c => c.model === startCell.column).model];
		} else {
			const startIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
			const endIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

			return this.columns.slice(startIndex, endIndex + 1).map(x => x.model);
		}
	}

	getCells(startCell, endCell) {
		if (!endCell) {
			return [{
				column: startCell.column,
				row: startCell.row
			}];
		} else {
			const startRowIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
			const endRowIndex = Math.max(startCell.rowIndex, endCell.rowIndex);

			const startColumnIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
			const endColumnIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

			const rowsSelected = this.rows.slice(startRowIndex, endRowIndex + 1);
			const columnsSelected = this.columns.slice(startColumnIndex, endColumnIndex + 1);

			const items = [];
			rowsSelected.forEach((row) => {
				columnsSelected.forEach((column) => {
					items.push({
						column: column.model,
						row: row
					});
				});
			});

			return items;
		}
	}

	get columns() {
		return columnService.lineView(this.model.view().columns);
	}

	get rows() {
		return this.model.view().rows;
	}
}