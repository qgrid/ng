import {FakeElement} from './fake';
import {Container} from './container';
import {flatten, zip, sumBy, max} from '../utility';

export class SelectorMediator {
	constructor(selectorsFactory) {
		this.selectorsFactory = selectorsFactory;
	}

	columnCount(rowIndex) {
		return sumBy(this.selectors, s => s.columnCount(rowIndex));
	}

	columnCells(columnIndex) {
		if (this.selectors.length === 1) {
			return this.selectors[0].columnCells(columnIndex);
		}

		return flatten(this.selectors.map(s => s.columnCells(columnIndex)));
	}

	rowCount(columnIndex) {
		return max(this.selectors.map(s => s.rowCount(columnIndex)));
	}

	rows(columnIndex) {
		if (this.selectors.length === 1) {
			return this.selectors[0].rows(columnIndex);
		}

		return zip(...this.selectors.map(s => s.rows(columnIndex))).map(entry => new Container(entry));
	}

	rowCells(rowIndex) {
		return flatten(this.selectors.map(s => s.rowCells(rowIndex)));
	}

	row(columnIndex) {
		if (this.selectors.length === 1) {
			return this.selectors[0].row(columnIndex);
		}

		const rows = this.selectors.map(s => s.row(columnIndex));
		return new Container(rows);
	}

	cell(rowIndex, columnIndex) {
		if (this.selectors.length === 1) {
			return this.selectors[0].cell(rowIndex, columnIndex);
		}

		return this.selectors.map(s => s.cell(rowIndex, columnIndex)).filter(cell => cell)[0] || new FakeElement();
	}

	get selectors() {
		return this.selectorsFactory();
	}
}