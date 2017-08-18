import {FakeElement} from './fake';
import {Container} from './container';
import {flatten, zip, sumBy, max} from '../utility';

export class Selector {
	constructor(context, model, elementSelector) {
		this.context = context;
		this.model = model;
		this.elementSelector = elementSelector;
	}

	rowCount() {
		// TODO: improve performance
		const elements = this.elementSelector();
		return max(elements.map(element => this.findRows(element).length));
	}

	columnCount() {
		// TODO: improve performance
		const elements = this.elementSelector();
		return sumBy(elements, element => {
			const rows = this.findRows(element);
			return rows.length ? rows[0].cells.length : 0;
		});
	}

	rows() {
		const elements = this.elementSelector();
		if (elements.length > 0) {
			if (elements.length > 1) {
				const rows = zip(...elements.map(element => this.findRows(element)));
				return rows.map(entry => new Container(entry));
			}

			return this.findRows(elements[0]);
		}

		return [];
	}

	columnCells(index) {
		const column = this.findColumn(index);
		if (column) {
			const findCell = this.findCellFactory(column.index);
			const cells = column.rows.map(row => findCell(row.cells) || new FakeElement());
			return cells;
		}

		return [];
	}

	rowCells(index) {
		if (index >= 0 && index < this.rowCount()) {
			const elements = this.elementSelector();
			const cells = flatten(elements.map(element => Array.from(this.findRows(element)[index].cells)));
			return cells;
		}

		return [];
	}

	row(index) {
		if (index >= 0 && index < this.rowCount()) {
			const elements = this.elementSelector();
			if (elements.length > 0) {
				if (elements.length > 1) {
					const box = elements.map(element => this.findRows(element)[index]);
					return new Container(box);
				}

				const rows = this.findRows(elements[0]);
				return rows[index];
			}
		}

		return new FakeElement();
	}

	cell(rowIndex, columnIndex) {
		if (rowIndex >= 0 && rowIndex < this.rowCount()) {
			if (columnIndex >= 0 && columnIndex < this.columnCount()) {
				const elements = this.elementSelector();
				const cells = flatten(elements.map(element => Array.from(this.findRows(element)[rowIndex].cells)));
				const findCell = this.findCellFactory(columnIndex);
				const cell = findCell(cells);
				return cell || new FakeElement();
			}
		}

		return new FakeElement();
	}

	findRows(element) {
		const rows = element.rows;
		const isDataRow = this.context.isDataRow;
		const result = [];
		for (let i = 0, length = rows.length; i < length; i++) {
			const row = rows[i];
			if (!isDataRow(row)) {
				continue;
			}

			result.push(row);
		}

		return result;
	}

	findCellFactory(columnIndex) {
		return cells => {
			let spanIndex = 0;
			for (let i = 0, length = cells.length; i < length; i++) {
				const cell = cells[i];
				if (i === columnIndex) {
					return i === spanIndex ? cell : null;
				}

				spanIndex += cell.colSpan;
			}
		};
	}

	findColumn(index) {
		if (index >= 0 && this.rowCount() > 0) {
			const elements = this.elementSelector();
			let startIndex = 0;
			for (let i = 0, length = elements.length; i < length; i++) {
				const element = elements[i];
				const rows = this.findRows(element);
				const cells = rows[0].cells;
				const endIndex = startIndex + cells.length;
				if (index < endIndex) {
					return {
						rows: rows,
						index: index - startIndex
					};
				}

				startIndex = endIndex;
			}
		}

		return null;
	}
}