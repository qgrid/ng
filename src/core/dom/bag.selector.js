import {FakeElement} from './fake';
import {uniq, groupBy} from '../utility';
import {Container} from './container';

export class BagSelector {
	constructor(bag) {
		this.bag = bag;
	}

	rowCount(columnIndex) {
		const rows =
			Array.from(this.bag.cells)
				.filter(cell => cell.columnIndex === columnIndex)
				.map(cell => cell.rowIndex);

		return uniq(rows).length;
	}

	columnCount(rowIndex) {
		const columns =
			Array.from(this.bag.cells)
				.filter(cell => cell.rowIndex === rowIndex)
				.map(cell => cell.columnIndex);

		return uniq(columns).length;
	}

	columns(rowIndex) {
		const columns =
			Array.from(this.bag.cells)
				.filter(cell => cell.rowIndex === rowIndex)
				.map(cell => cell.columnIndex);

		return uniq(columns)
			.map(column => ({
				index: column
			}));
	}

	rows() {
		const groups = groupBy(Array.from(this.bag.rows), r => r.index);
		return groups.map(g => {
			let element;
			if (g.value.length === 1) {
				element = g.value[0];
			}
			else {
				element = Container(g.value);
			}

			return {
				element: element,
				index: g.key
			};
		});
	}

	columnCells(columnIndex) {
		const cells =
			Array.from(this.bag.cells)
				.filter(cell => cell.columnIndex === columnIndex)
				.map(cell => ({
					element: cell.element,
					rowIndex: cell.rowIndex,
					columnIndex: cell.columnIndex
				}));

		return cells;
	}

	rowCells(rowIndex) {
		const cells =
			Array.from(this.bag.cells)
				.filter(cell => cell.rowIndex === rowIndex)
				.map(cell => ({
					element: cell.element,
					rowIndex: cell.rowIndex,
					columnIndex: cell.columnIndex
				}));

		return cells;
	}

	row(rowIndex) {
		const rows =
			Array.from(this.bag.rows)
				.filter(row => row.index === rowIndex)
				.map(row => row.element);

		let element;
		if (rows.length === 1) {
			element = rows[0];
		}
		else if (rows.length === 0) {
			element = FakeElement();
		}
		else {
			element = Container(rows);
		}

		return {
			element: element,
			index: rowIndex
		};
	}

	cell(rowIndex, columnIndex) {
		const cells =
			Array.from(this.bag.cells)
				.filter(cell =>
				cell.rowIndex === rowIndex &&
				cell.columnIndex === columnIndex)
				.map(cell => cell.element);

		let element;
		if (cells.length === 1) {
			element = cells[0];
		}
		else if (cells.length === 0) {
			element = new FakeElement();
		}
		else {
			element = new Container(cells);
		}

		return {
			element: element,
			rowIndex: rowIndex,
			columnIndex: columnIndex
		};
	}
}