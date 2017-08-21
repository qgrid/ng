import {FakeElement} from '../fake';

export class Selector {
	constructor(element, bag) {
		this.element = element;
		this.bag = bag;
	}

	columnCount(rowIndex) {
		const rows = this.rowsCore();
		const row = rows[rowIndex];
		return row ? row.cells.length : 0;
	}

	columnCells(columnIndex) {
		const rows = this.rowsCore();
		const findCell = this.findCellFactory(columnIndex);
		const result = [];
		for (let i = 0, length = rows.length; i < length; i++) {
			const row = rows[i];
			const cell = findCell(row);
			if (cell) {
				result.push({
					element: cell,
					rowIndex: i,
					columnIndex: columnIndex
				});
			}
		}

		return result;
	}

	rowCount(columnIndex) {
		const rows = this.rowsCore();
		const findCell = this.findCellFactory(columnIndex);
		let count = 0;
		for (let i = 0, length = rows.length; i < length; i++) {
			const row = rows[i];
			const cell = findCell(row);
			if (cell) {
				count += cell.rowSpan;
			}
		}

		return count;
	}

	rows(columnIndex) {
		const rows = this.rowsCore();
		const findCell = this.findCellFactory(columnIndex);
		const result = [];
		for (let i = 0, length = rows.length; i < length; i++) {
			const row = rows[i];
			const cell = findCell(row);
			if (cell) {
				result.push({
					index: i,
					element: row
				});
			}
		}

		return result;
	}

	rowCells(rowIndex) {
		const rows = this.rowsCore();
		const row = rows[rowIndex];
		const result = [];
		if (row) {
			const cells = row.cells;
			let index = 0;
			for (let i = 0, length = cells.length; i < length; i++) {
				const cell = cells[i];
				result.push({
					element: cell,
					rowIndex: rowIndex,
					columnIndex: index
				});

				index += cell.colSpan;
			}
		}

		return result;
	}

	row(rowIndex) {
		const rows = this.rowsCore();
		const row = rows[rowIndex];
		if (row) {
			return {
				index: rowIndex,
				element: row
			};
		}

		return {
			index: rowIndex,
			element: new FakeElement()
		};
	}

	cell(rowIndex, columnIndex) {
		const rows = this.rowsCore();
		const row = rows[rowIndex];
		if (row) {
			const findCell = this.findCellFactory(columnIndex);
			const cell = findCell(row);
			if (cell) {
				return {
					rowIndex: rowIndex,
					columnIndex: columnIndex,
					element: cell
				};
			}
		}

		return {
			rowIndex: rowIndex,
			columnIndex: columnIndex,
			element: new FakeElement()
		};
	}

	findCellFactory(columnIndex) {
		return row => {
			const cells = row.cells;
			const length = cells.length;
			let index = 0;
			while (index < length) {
				const cell = cells[index];
				if (index === columnIndex) {
					return cell;
				}
				index += cell.colSpan;
			}

			return null;
		};
	}

	rowsCore() {
		const isDataRow = this.bag.hasModel.bind(this.bag);
		const rows = this.element.rows;
		const result = [];
		for (let i = 0, length = rows.length; i < length; i++) {
			const row = rows[i];
			if (isDataRow(row)) {
				result.push(row);
			}
		}

		return result;
	}
}