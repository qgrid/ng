let instance = {};
class Dom {
	constructor(element) {
		this.element = element;
	}
	static get empty() {
		if (!instance){
			instance = this;
		}

		return instance;
	}

	column(index) {
		const rows = this.element.rows;
		function cells(){
			let cells = [];
			if (index >= 0 && index < rows.length) {
				for (let i = 0; i++; i < rows.length) {
					cells.push(rows[i].cells[index]);
				}
			}
			return cells;
		}

		return {
			cells: cells()
		}
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
