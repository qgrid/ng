'use strict';

import Directive from '../directive';

class Head extends Directive('qGridHead', {root: '^^qGrid'}) {
	constructor($scope, $element, $compile) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$compile = $compile;
	}

	onInit() {
		// const column = this.$scope.$column;
		// if (column) {
		// 	const cell = this.root.model.cell();
		// 	const resource = cell.resource;
		// 	const template = resource.hasOwnProperty(column.key)
		// 		? resource[column.key]
		// 		: '<span ng-bind="$cell.value()"></span>';

		// 	const linkTo = this.$compile(template);
		// 	const content = linkTo(this.$scope);
		// 	this.$element.append(content);
		// }
	}

	value() {
		// const column = this.$scope.$column;
		// const row = this.$scope.$row;

		// return column.value ? column.value(row) : row[column.key];
	}
}

Head.$inject = ['$scope', '$element', '$compile'];

export default {
	restrict: 'E',
	bindToController: true,
	controllerAs: '$head',
	controller: Head,
	require: Head.require,
	link: Head.link
};