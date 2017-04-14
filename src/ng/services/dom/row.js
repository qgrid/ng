import Cell from './cell';
import Element from './element';

class RowCore {
	cells() {
		return [];
	}

	cell() {
		return Cell.empty;
	}

	cellCount() {
		return 0;
	}
}
const rowCore = new RowCore();

export default class Row extends Element {
	constructor(element) {
		super(element);
		this.element = element;
	}

	static get empty() {
		return rowCore;
	}

	cells() {
		const cells = this.element.cells;
		const result = [];
		for (let i = 0, length = cells.length; i < length; i++) {
			const cell = cells[i];
			result.push(new Cell(cell));
		}
		return result;
	}

	cell(column) {
		if (column >= 0 && column < this.cellCount()) {
			const cells = this.element.cells;
			return new Cell(cells[column]);
		}
		return Cell.empty;
	}

	cellCount() {
		return this.element.cells.length;
	}
}
