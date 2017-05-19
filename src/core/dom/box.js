import {Row} from './row';
import {Column} from './column';
import {Cell} from './cell';
import {FakeTable, FakeElement} from './fake';
import {Container} from './container';
import {flatten} from '../services/utility'

export class Box {
	constructor(context) {
		this.context = context;
	}

	cell(row, column) {
		if (row >= 0 && row < this.rowCount()) {
			if (column >= 0 && column < this.columnCount()) {
				const elements = this.getElements();
				const cells = flatten(elements.map(element => element.rows[row].cells));
				return new Cell(this.context, cells[column])
			}
		}

		return new Cell(this.context, new FakeElement());
	}

	column(index) {
		if (index >= 0 && index < this.columnCount()) {
			return new Column(this, index);
		}

		return new Column(this, -1);
	}

	row(index) {
		if (index >= 0 && index < this.rowCount()) {
			const elements = this.getElements();
			const box = elements.map(element => element.rows[index]);
			return new Row(this, index, new Container(box))
		}

		return new Row(this, -1, new FakeElement());
	}

	rows() {
		const rows = this.getElements().map(element => element.rows);
		return rows.map((box, index) => new Row(this, index, new Container(box)));
	}

	rowCount() {
		const elements = this.getElements();
		return elements.max(element => element.rows.length);
	}

	columnCount() {
		const elements = this.getElements();
		return elements.sum(element => element.rows.length > 0 ? elements.rows[0].cells.length : 0);
	}

	getElements() {
		return this.getElementsCore() || [new FakeTable()];
	}

	getElementsCore() {
		return null;
	}

	rowCellsCore(index) {
		if (index >= 0 && index < this.rowCount()) {
			const elements = this.getElements();
			const context = this.context;
			const cells = flatten(elements.map(element => element.rows[index].cells));
			return cells.map(cell => new Cell(context, cell));
		}

		return [];
	}

	columnCellsCore(index) {
		const context = this.context;
		const element = this.findColumnElementCore(index);
		if (element) {
			return element.rows.map(row => new Cell(context, row.cells[index]));
		}

		return [];
	}

	findColumnElementCore(index) {
		if (index >= 0 && this.rowCount() > 0) {
			const elements = this.getElements();
			let startIndex = 0;
			for (let i = 0, length = elements.length; i < length; i++) {
				const element = elements[i];
				const cells = element.rows[0].cells;
				const endIndex = startIndex + cells.length;
				if (index < endIndex) {
					return element;
				}

				startIndex = endIndex;
			}

			return elements.find(element => element.rows[0].cells)
		}

		return null;
	}
}