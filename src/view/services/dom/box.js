import Row from './row';
import Column from './column';
import Cell from './cell';
import {ElementCore} from './element';

class BoxCore extends ElementCore {
	constructor() {
		super();
	}

	column() {
		return Column.empty
	}

	row() {
		return Row.empty
	}

	rows() {
		return [];
	}

	rowCount() {
		return 0;
	}

	columnCount() {
		return 0;
	}

	cell() {
		return Cell.empty;
	}

	scrollLeft() {
		return 0;
	}

	scrollTop() {
		return 0;
	}
}

const empty = new BoxCore();
export default class Box extends BoxCore {
	constructor(element) {
		super();

		this.element = element;
	}

	static get empty() {
		return empty;
	}

	column(index) {
		if (index >= 0) {
			const rows = this._rows();
			if (rows.length) {
				const cellsCount = rows[0].cells.length;
				if (index < cellsCount) {
					return new Column(this.element, index)
				}
			}
		}
		return Column.empty;
	}

	row(index) {
		if (index >= 0) {
			const rows = this._rows();
			if (index < rows.length) {
				return new Row(rows[index]);
			}
		}
		return Row.empty;
	}

	rows() {
		return this._rows().map(element => new Row(element));
	}

	rowCount() {
		return this._rows().length;
	}

	columnCount() {
		if (this.rowCount() > 0) {
			const row = this._rows()[0];
			return row.cells.length;
		}

		return 0;
	}

	cell(row, column) {
		if (row >= 0 && column >= 0) {
			const rows = this._rows();
			if (rows.length) {
				const cellsCount = rows[0].cells.length;
				if (row < rows.length && column < cellsCount) {
					const cell = rows[row].cells[column];
					return new Cell(cell);
				}
			}
		}
		return Cell.empty;
	}

	_rows() {
		return Array.from(this.element.rows).filter(row => !row.classList.contains('vscroll-mark'));
	}

	scrollLeft(value) {
		if (!arguments.length) {
			return this.element.scrollLeft;
		}

		this.element.scrollLeft = value;
	}

	scrollTop(value) {
		if (!arguments.length) {
			return this.element.scrollTop;
		}

		this.element.scrollTop = value;
	}

	rect() {
		return this.element.getBoundingClientRect();
	}
}