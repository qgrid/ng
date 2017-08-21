import {FakeElement} from '../fake';
import {Container} from '../container';
import {zip, sumBy, max} from '../../utility';

export class SelectorMediator {
	constructor(selectorsFactory) {
		this.getSelectors = selectorsFactory;
	}

	columnCount(rowIndex) {
		const selectors = this.getSelectors({row: rowIndex});
		return sumBy(selectors, s => s.columnCount(rowIndex));
	}

	columnCells(columnIndex) {
		const selectors = this.getSelectors({column: columnIndex});
		if (selectors.length === 1) {
			return selectors[0].columnCells(columnIndex);
		}

		const result = [];
		for (let i = 0, length = selectors.length; i < length; i++) {
			const selector = selectors[i];
			const cells = selector.columnCells(columnIndex);
			result.push(...cells);
		}

		return result;
	}

	rowCount(columnIndex) {
		const selectors = this.getSelectors({column: columnIndex});
		return max(selectors.map(s => s.rowCount(columnIndex)));
	}

	rows(columnIndex) {
		const selectors = this.getSelectors({column: columnIndex});
		if (selectors.length === 1) {
			return selectors[0].rows(columnIndex);
		}

		return zip(...selectors.map(s => s.rows(columnIndex))).map(entry => new Container(entry));
	}

	rowCells(rowIndex) {
		const selectors = this.getSelectors({row: rowIndex});
		if (selectors.length === 1) {
			return selectors[0].rowCells(rowIndex);
		}

		const result = [];
		for (let i = 0, length = selectors.length; i < length; i++) {
			const selector = selectors[i];
			const cells = selector.rowCells(rowIndex);
			result.push(...cells);
		}

		return result;
	}

	row(rowIndex) {
		const selectors = this.getSelectors({row: rowIndex});
		if (selectors.length === 1) {
			return selectors[0].row(rowIndex);
		}

		const result = [];
		for (let i = 0, length = selectors.length; i < length; i++) {
			const selector = selectors[i];
			const row = selector.row(rowIndex);
			result.push(row.element);
		}

		return {
			index: rowIndex,
			element: new Container(result)
		};
	}

	cell(rowIndex, columnIndex) {
		const selectors = this.getSelectors({row: rowIndex, column: columnIndex});
		if (selectors.length === 1) {
			return selectors[0].cell(rowIndex, columnIndex);
		}

		return selectors.map(s => s.cell(rowIndex, columnIndex)).filter(cell => cell)[0] || new FakeElement();
	}
}