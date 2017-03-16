import SelectionBehavior from './selection.behavior';
import {isUndefined} from 'core/services/utility';

export default class RowSelectionBehavior extends SelectionBehavior {
	constructor(model, markup, state, apply){
		super(state, apply);

		this.model = model;
		this.markup = markup;
	}

	selectCore(item) {
		if (isUndefined(item)) {
			return this.rows;
		}

		return item;
	}

	selectCellCore(cell) {
		const rows = this.rows;
		return rows[cell.rowIndex];
	}

	selectRangeCore(startCell, endCell) {
		const startIndex = Math.min(startCell.rowIndex, endCell.rowIndex);
		const endIndex = Math.max(startCell.rowIndex, endCell.rowIndex);
		return this.rows.slice(startIndex, endIndex + 1);
	}

	get rows() {
		return this.model.view().rows;
	}
}