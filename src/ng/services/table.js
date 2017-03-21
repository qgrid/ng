class lazyProperty {
	constructor(object, name, create) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			get: function () {
				return this[name] = create(this);
			},
			set: function (value) {
				Object.defineProperty(this, name, {
					configurable: true,
					enumerable: false,
					value: value,
					writable: true
				});
			}
		});
	}
}
class Empty {
	column() {
		return {cells: []};
	}

	row() {
		return {cells: []};
	}

	cell() {
		return null;
	}
}
class TableDom extends Empty {
	constructor(element) {
		super();
		this.element = element;
	}

	static get empty() {
		return new Empty();
	}

	column(index) {
		const element = this.element;
		const rows = element.rows;
		const cellsCount = rows[0].cells.length;
		let obj = {};
		new lazyProperty(obj, "cells", () => {
			let result = [];
			if (index >= 0 && index < cellsCount) {
				for (let i = 0; i < rows.length; i++) {
					result.push(rows[i].cells[index]);
				}
			}
			return result;
		});
		return obj;
	}

	row(index) {
		const element = this.element;
		const rows = element.rows;
		if (index >= 0 && index < rows.length) {
			return rows[index];
		}
	}

	cell(row, column) {
		const element = this.element;
		const rows = element.rows;
		const cellsCount = rows[0].cells.length;
		if (row >= 0 && row < rows.length && column >= 0 && column < cellsCount) {
			return rows[row].cells[column];
		}
	}
}

export default class Table {
	constructor(markup) {
		this.markup = markup;
	}

	cellAt(row, column) {
		const rows = this.markup.body.rows;
		if (row >= 0 && row < rows.length) {
			const rowElement = rows[row];
			const cells = rowElement.cells;
			if (column >= 0 && column < cells.length) {
				const cellElement = cells[column];
				const scope = angular.element(cellElement).scope();
				if (scope) {
					return scope.$cell;
				}
			}
		}

		return null;
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
