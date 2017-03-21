let instance = {}
class Dom {
	constructor(element) {
		this.element = element;
	}
	static get empty() {
		if (!instance) {
			instance = this;
		}

		return instance;
	}

	column(index) {
		const rows = this.element.rows;
		let obj = {};
		Object.defineProperty(obj, "cells", {
			get: function () {
				const cellsCount = rows[0].cells.length;
				let result = [];
				if (index >= 0 && index < cellsCount) {
					for (let i = 0; i < rows.length; i++) {
						result.push(rows[i].cells[index]);
					}
				}
				return result;
			}
		});
		return obj;
	}
	row(index) {
		const rows = this.element.rows;
		if (index >= 0 && index < rows.length) {
			return rows[index];
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
		return this.markup.body ? new Dom(this.markup.body) : Dom.empty;
	}

	get foot() {
		return this.markup.foot ? new Dom(this.markup.foot) : Dom.empty;
	}

	get head() {
		return this.markup.head ? new Dom(this.markup.head) : Dom.empty;
	}
}
