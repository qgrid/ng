'use strict';

import Directive from '../directive';

class Cell extends Directive('qGridCell', {root: '^^qGrid'}) {
	constructor($scope, $element, $compile) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$compile = $compile;
	}

	onInit() {
		const column = this.$scope.$column;
		if (column) {
			const cell = this.root.model.cell();
			const resource = cell.resource;
			const template = resource.hasOwnProperty(column.key)
				? resource[column.key]
				: '<span ng-bind="$cell.value()"></span>';

			const element = angular.element('<span>' + template + '</span>');
			this.$element.append(element);
			this.$compile(element)(this.$scope);
		}
	}

	value() {
		const column = this.$scope.$column;
		const row = this.$scope.$row;

		return column.value ? column.value(row) : row[column.key];
	}
}

Cell.$inject = ['$scope', '$element', '$compile'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: Cell,
	require: Cell.require,
	link: Cell.link
};