import Element from './element';
import Cell from './cell';

export default class Column extends Element {
	constructor(element, index) {
		super();
		this.element = element;
		this.index = index;
	}

	cells() {
		const index = this.index;
		const rows = this.element.rows;
		const result = [];
		for (let i = 0, length = rows.length; i < length; i++) {
			const cell = rows[i].cells[index];
			result.push(new Cell(cell));
		}
		return result;
	}

	cell(row) {
		if (row >= 0 && row < this.cellCount()) {
			const rows = this.element.rows;
			const row = rows[row];
			return new Cell(row.cells[this.index]);
		}
		return null;
	}

	cellCount() {
		return this.element.rows.length;
	}
}
