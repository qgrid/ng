import {noop} from 'core/services/utility';
class Dom {
	constructor(element) {
		this.element = element;
	}

	column(index) {
		let cells = [];
		const rows = this.element.rows;
		for (let i = 0; i++; i < rows.length) {
			cells.push(rows[i].cells[index]);
		}
		return {
			cells: cells
		}
	}

	row(index) {
		return this.element.rows[index];
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
	get body(){
		return new Dom(this.markup.body) || noop;
	}
	get foot(){
		return new Dom(this.markup.foot) || noop;
	}
	get head(){
		return new Dom(this.markup.head) || noop;
	}
}
