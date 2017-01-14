'use strict';

import Component from '../component';

class Cell extends Component {
	constructor($scope, $element, $compile) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$compile = $compile;
	}

	value() {
		const column = this.column;
		const row = this.row;

		return column.value ? column.value(row) : row[column.key];
	}

	onInit() {
		if (this.column) {
			const cell = this.root.model.cell();
			const templates = cell.templates;
			const markup = templates.hasOwnProperty(this.column.key)
				? templates[this.column.key]
				: '{{$cell.value()}}';

			this.$element.html(markup);
			this.$compile(this.$element)(this.$scope);
		}
	}
}

Cell.$inject = ['$scope', '$element', '$compile'];

export default {
	controllerAs: '$cell',
	require: {
		root: '^^qGrid'
	},
	controller: Cell,
	bindings: {
		column: '<',
		row: '<'
	}
};