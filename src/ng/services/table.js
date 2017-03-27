class Dom {
	column() {
		return {
			cells: () => {
				return [];
			}
		};
	}

	row() {
		return {
			cells: () => {
				return [];
			}
		};
	}

	cell() {
		return null;
	}
}
class TableDom extends Dom {
	constructor(element) {
		super();
		this.element = element;
	}

	static get empty() {
		return new Dom();
	}

	column(index) {
		const element = this.element;
		const cellsCount = element.rows[0].cells.length;
		if (index >= 0 && index < cellsCount) {
			return new ColumnDom(element, index);
		}
		return null;
	}

	row(index) {
		const rows = this.element.rows;
		if (index >= 0 && index < rows.length) {
			return new RowDom(rows[index]);
		}
		return null;
	}

	cell(row, column) {
		const rows = this.element.rows;
		const cellsCount = rows[0].cells.length;
		if (row < rows.length && column < cellsCount) {
			const cell = rows[row].cells[column];
			return new CellDom(cell);
		}
		return null;
	}
}
class CellDom extends Dom {
	constructor(element) {
		super();
		this.element = element;
	}

	get model() {
		const scope = angular.element(this.element).scope();
		if (scope) {
			return scope.$cell;
		}
	}

	addClass(name) {
		this.element.classList.add(name);
	}

	removeClass(name) {
		this.element.classList.remove(name);
	}
}
class RowDom extends Dom {
	constructor(element) {
		super(element);
		this.element = element;
	}

	cells() {
		const row = this.element;
		const cellsCount = row.cells.length;
		const result = [];
		for (let i = 0; i < cellsCount; i++) {
			const cell = row.cells[i];
			result.push(new CellDom(cell));
		}
		return result;
	}
}
class ColumnDom extends Dom {
	constructor(element, index) {
		super();
		this.element = element;
		this.index = index;
	}

	cells() {
		const index = this.index;
		const rows = this.element.rows;
		const result = [];
		for (let i = 0; i < rows.length; i++) {
			const cell = rows[i].cells[index];
			result.push(new CellDom(cell));
		}
		return result;
	}

}

export default class Table {
	constructor(markup) {
		this.markup = markup;
	}

	get body() {
		return this.markup.body ? new TableDom(this.markup.body) : TableDom.empty;
	}

	get foot() {
		return this.markup.foot ? new TableDom(this.markup.foot) : TableDom.empty;
	}

	get head() {
		return this.markup.head ? new TableDom(this.markup.head) : TableDom.empty;
	}

}
