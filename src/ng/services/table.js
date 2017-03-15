export default class Table {
	constructor(markup) {
		this.markup = markup;
	}

	cellAt(row, column) {
		let cell = null;
		if (column > -1 && row > -1) {
			const element = this.markup.body.rows[row].cells[column];
			const scope = angular.element(element).scope();
			cell = scope ? scope.$cell : null;
		}
		return cell;
	}
}