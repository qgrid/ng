import SelectionBehavior from './selection.behavior';
import {isUndefined} from 'core/services/utility';
import * as columnService from 'core/column/column.service';

export default class CellSelectionBehavior extends SelectionBehavior {
	constructor(model, markup, state, apply){
		super(state, apply);

		this.model = model;
		this.markup = markup;
	}

	selectCore(item) {
		if (isUndefined(item)) {
			return Array.from(this.markup.body.rows)
							.map(row => Array.from(row.cells))
							.reduce((agg, row) => [...agg, ...row]);
		}

		return item;
	}

	selectCellCore(cell) {
		return {
			column: cell.column.key,
			row: cell.row
		};
	}

	selectRangeCore(startCell, endCell) {
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
					column: column.model.key,
					row: row
				});
			});
		});

		return items;
	}

	get columns() {
		return columnService.lineView(this.model.view().columns);
	}

	get rows() {
		return this.model.view().rows;
	}
}