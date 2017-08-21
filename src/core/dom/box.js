import {Row} from './row';
import {Column} from './column';
import {Cell} from './cell';
import {FakeTable} from './fake';
import {Selector} from './selector';
import {SelectorMediator} from './selector.mediate';

export class Box {
	constructor(context, model) {
		this.context = context;
		this.model = model;
		this.selector =
			new SelectorMediator(() =>
				this.getElements()
					.map(element =>
						new Selector(element, context.bag)));
	}

	columnCount(rowIndex) {
		return this.selector.columnCount(rowIndex);
	}

	column(columnIndex) {
		const columnFactory = this.createColumnCore.bind(this);
		return columnFactory(columnIndex);
	}

	columns(rowIndex) {
		const columnFactory = this.createColumnCore.bind(this);
		return this.selector.columns(rowIndex).map(column => columnFactory(column.index));
	}

	row(rowIndex) {
		return this.rowCore(rowIndex);
	}

	rows(columnIndex) {
		const rowFactory = this.createRowCore.bind(this);
		return this.selector.rows(columnIndex).map(row => rowFactory(row.index));
	}

	rowCount(columnIndex) {
		return this.selector.rowCount(columnIndex);
	}

	cell(rowIndex, columnIndex) {
		return this.cellCore(rowIndex, columnIndex);
	}

	getElements() {
		return this.getElementsCore() || [new FakeTable()];
	}

	getElementsCore() {
		return null;
	}

	rowCore(index) {
		const rowFactory = this.createRowCore.bind(this);
		return rowFactory(index, this.selector.row(index).element);
	}

	cellCore(rowIndex, columnIndex) {
		const cellFactory = this.createCellCore.bind(this);
		const cell = this.selector.cell(rowIndex, columnIndex);
		return cellFactory(cell.rowIndex, cell.columnIndex, cell.element);
	}

	rowCellsCore(columnIndex) {
		const cellFactory = this.createCellCore.bind(this);
		return this.selector
			.rowCells(columnIndex)
			.map(cell => cellFactory(cell.columnIndex, cell.rowIndex, cell.element));
	}

	columnCellsCore(rowIndex) {
		const cellFactory = this.createCellCore.bind(this);
		return this.selector
			.columnCells(rowIndex)
			.map(cell => cellFactory(cell.columnIndex, cell.rowIndex, cell.element));
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