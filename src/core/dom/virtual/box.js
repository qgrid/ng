import {VirtualCell} from './cell';
import {VirtualRow} from './row';
import {Box} from '../box';
import {CellBox} from './cell.box';
import {RowBox} from './row.box';

export class VirtualBox extends Box {
	constructor(context, model) {
		super(context, model);

		this.cellBox = new CellBox();
		this.rowBox = new RowBox();
	}

	invalidate() {

	}

	addCellClass(cell, name) {
		const model = cell.model;
		if (model) {
			this.cellBox
				.addClass(
					model.rowIndex,
					model.columnIndex,
					name);
		}

		cell.addClassCore(name);
	}

	removeCellClass(cell, name) {
		const model = cell.model;
		if (model) {
			this.cellBox
				.removeClass(
					model.rowIndex,
					model.columnIndex,
					name);
		}

		cell.removeClassCore(name);
	}

	addRowClass(row, name) {
		const model = row.model;
		if (model) {
			this.rowBox
				.addClass(
					model.index,
					name);
		}

		row.addClassCore(name);
	}

	removeRowClass(row, name) {
		const model = row.model;
		if (model) {
			this.rowBox
				.removeClass(
					model.index,
					name);
		}

		row.removeClassCore(name);
	}

	createRowCore(index, element) {
		return new VirtualRow(this, index, element);
	}

	createCellCore(element) {
		return new VirtualCell(this, this.context, element);
	}
}