import SelectionBehavior from './selection.behavior';
import {isUndefined} from 'core/services/utility';

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
		return this.markup.body.rows[cell.rowIndex].cells[cell.columnIndex];
	}

	selectRangeCore(startCell, endCell) {
		const startRowIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
		const endRowIndex = Math.max(startCell.rowIndex, endCell.rowIndex);

		const startColumnIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
		const endColumnIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

		const rows = Array.from(this.markup.body.rows).slice(startRowIndex, endRowIndex + 1);

		const items = rows
			.map(row => Array.from(row.cells).slice(startColumnIndex, endColumnIndex + 1))
			.reduce((agg, row) => [...agg, ...row]);

		return items;
	}
}