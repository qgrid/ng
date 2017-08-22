import {FakeElement} from '../fake';
import {Container} from '../container';
import {zip, sumBy, max} from '../../utility';

export class SelectorMediator {
	constructor(selectorContextFactory) {
		this.getContext = selectorContextFactory;
	}

	columnCount(rowIndex) {
		const context = this.getContext({row: rowIndex});
		const selectors = context.selectors;
		return sumBy(selectors, s => s.columnCount(rowIndex));
	}

	columnCells(columnIndex) {
		const context = this.getContext({column: columnIndex});
		const selectors = context.selectors;
		columnIndex = context.mapper.column(columnIndex);

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
		const context = this.getContext({column: columnIndex});
		const selectors = context.selectors;
		columnIndex = context.mapper.column(columnIndex);

		return max(selectors.map(s => s.rowCount(columnIndex)));
	}

	rows(columnIndex) {
		const context = this.getContext({column: columnIndex});
		const selectors = context.selectors;
		columnIndex = context.mapper.column(columnIndex);

		if (selectors.length === 1) {
			return selectors[0].rows(columnIndex);
		}

		return zip(...selectors.map(s => s.rows(columnIndex))).map(entry => new Container(entry));
	}

	rowCells(rowIndex) {
		const context = this.getContext({rowIndex: rowIndex});
		const selectors = context.selectors;
		rowIndex = context.mapper.row(rowIndex);

		if (selectors.length === 1) {
			return selectors[0].rowCells(rowIndex);
		}

		const result = [];
		for (let i = 0, length = selectors.length; i < length; i++) {
			const selector = selectors[i];
			const cells = selector.rowCells(rowIndex);
			for(let j = 0, cellLength =  )
			result.push(...cells);
		}

		return result;
	}

	row(rowIndex) {
		const context = this.getContext({rowIndex: rowIndex});
		const selectors = context.selectors;
		rowIndex = context.mapper.row(rowIndex);

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
		const context = this.getContext({row: rowIndex, column: columnIndex});
		const selectors = context.selectors;
		rowIndex = context.mapper.row(rowIndex);
		columnIndex = context.mapper.column(columnIndex);

		if (selectors.length === 1) {
			return selectors[0].cell(rowIndex, columnIndex);
		}

		return selectors.map(s => s.cell(rowIndex, columnIndex)).filter(cell => cell)[0] || new FakeElement();
	}
}