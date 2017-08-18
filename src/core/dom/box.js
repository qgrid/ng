import {Row} from './row';
import {Column} from './column';
import {Cell} from './cell';
import {FakeTable} from './fake';
import {Selector} from './selector';

export class Box {
	constructor(context, model) {
		this.context = context;
		this.model = model;
		this.selector = new Selector(context, model, this.getElements.bind(this));
	}

	cell(rowIndex, columnIndex) {
		return this.cellCore(rowIndex, columnIndex);
	}

	column(index) {
		const columnFactory = this.createColumnCore.bind(this);
		return columnFactory(index);
	}

	row(index) {
		return this.rowCore(index);
	}

	rows() {
		const rowFactory = this.createRowCore.bind(this);
		return this.selector.rows().map((row, i) => rowFactory(i, row));
	}

	rowCount() {
		return this.selector.rowCount();
	}

	columnCount() {
		return this.selector.columnCount();
	}

	getElements() {
		return this.getElementsCore() || [new FakeTable()];
	}

	getElementsCore() {
		return null;
	}

	rowCore(index) {
		const rowFactory = this.createRowCore.bind(this);
		return rowFactory(index, this.selector.row(index));
	}

	cellCore(rowIndex, columnIndex) {
		const cellFactory = this.createCellCore.bind(this);
		const cell = this.selector.cell(rowIndex, columnIndex);
		return cellFactory(rowIndex, columnIndex, cell);
	}

	rowCellsCore(index) {
		const cellFactory = this.createCellCore.bind(this);
		return this.selector
			.rowCells(index)
			.map((cell, i) => cellFactory(index, i, cell));
	}

	columnCellsCore(index) {
		const cellFactory = this.createCellCore.bind(this);
		return this.selector
			.columnCells(index)
			.map((cell, i) => cellFactory(i, index, cell));
	}

	createRowCore(index, element) {
		return new Row(this, index, element);
	}

	createColumnCore(index) {
		return new Column(this, index);
	}

	createCellCore(rowIndex, columnIndex, element) {
		return new Cell(this.context, rowIndex, columnIndex, element);
	}
}