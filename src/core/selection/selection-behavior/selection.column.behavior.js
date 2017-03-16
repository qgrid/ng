import SelectionBehavior from './selection.behavior';
import {isUndefined} from 'core/services/utility';
import * as columnService from 'core/column/column.service';

export default class ColumnSelectionBehavior extends SelectionBehavior {
	constructor(model, markup, state, apply){
		super(state, apply);

		this.model = model;
		this.markup = markup;
	}

	selectCore(item) {
		if (isUndefined(item)) {
			return this.columns;
		}

		return item;
	}

	selectCellCore(cell) {
		return this.columns.find(c => c.model === cell.column).model;
	}

	selectRangeCore(startCell, endCell) {
		const startIndex = Math.min(startCell.columnIndex, endCell.columnIndex);
		const endIndex = Math.max(startCell.columnIndex, endCell.columnIndex);

		return this.columns.slice(startIndex, endIndex + 1).map(x => x.model);
	}

	get columns() {
		return columnService.lineView(this.model.view().columns);
	}
}