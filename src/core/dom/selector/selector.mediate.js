import {FakeElement} from '../fake';
import {Container} from '../container';
import {zip, sumBy, max} from '../../utility';

export class SelectorMediator {
	constructor(selectorFactory, factory) {
		this.buildSelectors = selectorFactory;
		this.factory = factory;
	}

	columnCount(rowIndex) {
		const selectors = this.buildSelectors({row: rowIndex});
		return sumBy(selectors, s => s.invoke((s, rowIndex) => s.columnCount(rowIndex)));
	}

	columnCells(columnIndex) {
		const selectors = this.buildSelectors({column: columnIndex});
		const result = [];
		for (let i = 0, length = selectors.length; i < length; i++) {
			const selector = selectors[i];
			const cells = selector.invoke((s, columnIndex) => s.columnCells(columnIndex));
			result.push(...cells);
		}

		return result;
	}

	rowCount(columnIndex) {
		const selectors = this.buildSelectors({column: columnIndex});
		return max(selectors.map(s => s.invoke((s, columnIndex) => s.rowCount(columnIndex))));
	}

	rows(columnIndex) {
		const selectors = this.buildSelectors({column: columnIndex});
		const factory = this.factory;
		return zip(...selectors.map(s => s.invoke((s, columnIndex) => s.rows(columnIndex))))
			.map(entry => factory.row(new Container(entry.map(row => row.element)), entry[0].index));
	}

	rowCells(rowIndex) {
		const selectors = this.buildSelectors({row: rowIndex});
		const result = [];
		for (let i = 0, length = selectors.length; i < length; i++) {
			const selector = selectors[i];
			const cells = selector.invoke((s, rowIndex) => s.rowCells(rowIndex));
			result.push(...cells);
		}

		return result;
	}

	row(rowIndex) {
		const selectors = this.buildSelectors({row: rowIndex});
		const result = [];
		for (let i = 0, length = selectors.length; i < length; i++) {
			const selector = selectors[i];
			const row = selector.invoke((s, rowIndex) => s.row(rowIndex));
			result.push(row.element);
		}

		return this.factory.row(new Container(result), rowIndex);
	}

	cell(rowIndex, columnIndex) {
		const selectors = this.buildSelectors({row: rowIndex, column: columnIndex});
		for (let i = 0, length = selectors.length; i < length; i++) {
			const selector = selectors[i];
			const cell = selector.invoke((s, rowIndex, columnIndex) => s.cell(rowIndex, columnIndex));
			if (!(cell.element instanceof FakeElement)) {
				return cell;
			}
		}

		return this.factory.cell(new FakeElement(), rowIndex, columnIndex);
	}
}