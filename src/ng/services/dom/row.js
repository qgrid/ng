import Element from './element';
import Cell from './cell';

export default class Row extends Element {
	constructor(element) {
		super(element);
		this.element = element;
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
		if(column >= 0) {
			const cells = this.element.cells;
			if (column < cells.length) {
				return new Cell(cells[column]);
			}
		}
		return null;
	}
}
