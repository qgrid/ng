import {FakeElement} from './fake';
import {Container} from './container';
import {flatten, zip, sumBy, max} from '../utility';

export class SelectorMediator {
	constructor(selectorsFactory) {
		this.selectorsFactory = selectorsFactory;
	}

	get selectors() {
		return this.selectorsFactory();
	}

	rowCount(columnIndex) {
		return max(this.selectors.map(s => s.rowCount(columnIndex)));
	}

	columnCount(rowIndex) {
		return sumBy(this.selectors, s => s.columnCount(rowIndex));
	}

	rows(columnIndex) {
		if (this.selectors.length === 1) {
			return this.selectors[0].rows(columnIndex);
		}

		return zip(...this.selectors.map(s => s.rows(columnIndex))).map(entry => new Container(entry));
	}

	columnCells(rowIndex) {
		if (this.selectors.length === 1) {
			return this.selectors[0].columnCells(rowIndex);
		}

		return flatten(this.selectors.map(s => s.columnCells(rowIndex)));
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
}