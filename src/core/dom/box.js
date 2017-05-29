import {Row} from './row';
import {Column} from './column';
import {Cell} from './cell';
import {FakeTable, FakeElement} from './fake';
import {Container} from './container';
import {flatten, zip, sumBy, max} from '../services/utility';

export class Box {
	constructor(context, model) {
		this.context = context;
		this.gridModel = model;
	}

	cell(rowIndex, columnIndex) {
		const cellFactory = this.createCellCore.bind(this);
		rowIndex = this.context.mapper.row(rowIndex);
		columnIndex = this.context.mapper.column(columnIndex);

		if (rowIndex >= 0 && rowIndex < this.rowCount()) {
			if (columnIndex >= 0 && columnIndex < this.columnCount()) {
				const elements = this.getElements();
				const cells = flatten(elements.map(element => Array.from(this.rowsCore(element)[rowIndex].cells)));
				return cellFactory(cells[columnIndex]);
			}
		}

		return cellFactory(new FakeElement());
	}

	column(index) {
		const columnFactory = this.createColumnCore.bind(this);
		index = this.context.mapper.column(index);
		if (index >= 0 && index < this.columnCount()) {
			return columnFactory(index);
		}

		return columnFactory(-1);
	}

	row(index) {
		const rowFactory = this.createRowCore.bind(this);
		index = this.context.mapper.row(index);
		if (index >= 0 && index < this.rowCount()) {
			const elements = this.getElements();
			const box = elements.map(element => this.rowsCore(element)[index]);
			return rowFactory(index, new Container(box));
		}

		return rowFactory(-1, new FakeElement());
	}

	rows() {
		const rowFactory = this.createRowCore.bind(this);
		const elements = this.getElements();
		if (elements.length > 0) {
			if (elements.length > 1) {
				const rows = zip(...elements.map(element => this.rowsCore(element)));
				return rows.map((entry, index) => rowFactory(index, new Container(entry)));
			}

			return this.rowsCore(elements[0]).map((row, index) => rowFactory(index, row));
		}

		return [];
	}

	rowCount() {
		// TODO: improve performance
		const elements = this.getElements();
		return max(elements.map(element => this.rowsCore(element).length));
	}

	columnCount() {
		// TODO: improve performance
		const elements = this.getElements();
		return sumBy(elements, element => {
			const rows = this.rowsCore(element);
			return rows.length ? rows[0].cells.length : 0;
		});
	}

	getElements() {
		return this.getElementsCore() || [new FakeTable()];
	}

	getElementsCore() {
		return null;
	}

	rowsCore(element) {
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

	rowCellsCore(index) {
		const cellFactory = this.createCellCore.bind(this);
		if (index >= 0 && index < this.rowCount()) {
			const elements = this.getElements();
			const cells = flatten(elements.map(element => Array.from(this.rowsCore(element)[index].cells)));
			return cells.map(cell => cellFactory(cell));
		}

		return [];
	}

	columnCellsCore(index) {
		const cellFactory = this.createCellCore.bind(this);
		const column = this.findColumnCore(index);
		if (column) {
			return column.rows.map(row => cellFactory(row.cells[column.index]));
		}

		return [];
	}

	findColumnCore(index) {
		if (index >= 0 && this.rowCount() > 0) {
			const elements = this.getElements();
			let startIndex = 0;
			for (let i = 0, length = elements.length; i < length; i++) {
				const element = elements[i];
				const rows = this.rowsCore(element);
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

	createRowCore(index, element) {
		return new Row(this, index, element);
	}

	createColumnCore(index) {
		return new Column(this, index);
	}

	createCellCore(element) {
		return new Cell(this.context, element);
	}
}