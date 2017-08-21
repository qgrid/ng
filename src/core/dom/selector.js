import {FakeElement} from './fake';
import {BagSelector} from './bag.selector';

export class Selector {
	constructor(context, element) {
		this.context = context;
		this.element = element;
	}

	rowCount(columnIndex) {
		return this.rowsCore(columnIndex).length;
	}

	columnCount(rowIndex) {
		const row = this.rowCore(rowIndex);
		return row ? row.cells.length : 0;
	}

	rows(columnIndex) {
		return this.rowsCore(columnIndex)
			.map((element, i) => ({
				element: element,
				index: i
			}));
	}

	columnCells(columnIndex) {

	}

	rowCells(rowIndex) {
		const row = this.rowCore(rowIndex);
		return row ? Array.from(row.cells) : [];
	},.

	row(rowIndex) {
		const row = this.rowCore(rowIndex);

	}

	cell(rowIndex, columnIndex) {
	}

	rowsCore(columnIndex) {
		const bag = this.context.bag;

	}

	rowCore(rowIndex) {

	}
}