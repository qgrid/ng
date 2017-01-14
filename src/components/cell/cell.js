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
			const resource = cell.resource;
			const template = resource.hasOwnProperty(this.column.key)
				? resource[this.column.key]
				: '<span ng-bind="$cell.value()"></span>';

			this.$element.html(template);
			this.$compile(this.$element)(this.$scope);
		}
	}
}

Cell.$inject = ['$scope', '$element', '$compile'];

export default {
	//template: ,
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