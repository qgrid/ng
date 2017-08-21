import {FakeElement} from './fake';
import {Container} from './container';
import {flatten, zip, sumBy, max} from '../utility';

export class BagMediator {
	constructor(selectors) {
		this.selectors = selectors;
	}

	rowCount() {
		return max(this.selectors.map(s => s.rowCount()));
	}

	columnCount() {
		return sumBy(this.selectors, s => s.columnCount());
	}

	rows() {
		if (this.selectors.length === 1) {
			return this.selectors[0].rows();
		}

		return zip(...this.selectors.map(s => s.rows())).map(entry => new Container(entry));
	}

	columnCells(index) {
		if (this.selectors.length === 1) {
			return this.selectors[0].columnCells(index);
		}

		return flatten(this.selectors.map(s => s.columnCells(index)));
	}

	rowCells(index) {
		return flatten(this.selectors.map(s => s.rowCells(index)));
	}

	row(index) {
		if (this.selectors.length === 1) {
			return this.selectors[0].row(index);
		}

		const rows = this.selectors.map(s => s.row(index));
		return new Container(rows);
	}

	cell(rowIndex, columnIndex) {
		if (this.selectors.length === 1) {
			return this.selectors[0].cell(rowIndex, columnIndex);
		}

		return this.selectors.map(s => s.cell(rowIndex, columnIndex)).filter(cell => cell)[0] || new FakeElement();
	}
}