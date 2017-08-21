import * as columnService from '../column/column.service';

export class Column {
	constructor(box, index) {
		this.box = box;
		this.index = index;
	}

	model() {
		const columns = this.box.model.view().columns;
		const column = columnService.lineView(columns)[this.index];
		return column ? column.model : null;
	}

	cells() {
		return this.box.columnCellsCore(this.index);
	}

	cell(rowIndex) {
		return this.box.cell(rowIndex, this.index);
	}

	addClass(name) {
		this.cells().forEach(cell => cell.addClass(name));
	}

	removeClass(name) {
		this.cells().forEach(cell => cell.removeClass(name));
	}
}