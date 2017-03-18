import SelectionBehavior from './selection.behavior';
import {isUndefined} from 'core/services/utility';
import * as columnService from 'core/column/column.service';

export default class MixedSelectionBehavior extends SelectionBehavior {
	constructor(model, markup, state, apply){
		super(state, apply);

		this.model = model;
		this.markup = markup;
	}

	selectCore(item, state, unit) {
		if (isUndefined(item)) {

			const rows = Array.from(this.markup.body.rows);
			if (unit === 'row') {
				return rows;
			} else {
				return rows.map(row => Array.from(row.cells))
							.reduce((agg, row) => [...agg, ...row]);
			}			
		}

		return item;
	}

	selectCellCore(cell, unit) {
		if (unit === 'row') {
			return cell.row;
		} else {
			return {
				column: cell.column.key,
				row: cell.row
			};
		}
	}

	selectRangeCore(startCell, endCell, unit) {
		const startRowIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
		const endRowIndex = Math.max(startCell.rowIndex, endCell.rowIndex);

		const startColumnIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
		const endColumnIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

		const rowsSelected = this.rows.slice(startRowIndex, endRowIndex + 1);

		if (unit === 'row'){
			return rowsSelected;
		} else {
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
	
	get view() {
		return this.state.view;
	}
}