class Table {
	constructor(markup) {
		this.markup = markup;
	}

	cellAt(row, column) {
		let cell = null;
		if (column >= 0 && row >= 0) {
			const element = this.markup.body.rows[row].cells[column];
			const scope = angular.element(element).scope();
			cell = scope ? scope.$cell : null;
		}
		return cell;
	}
}