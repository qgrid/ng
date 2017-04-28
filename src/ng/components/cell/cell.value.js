import Directive from 'ng/directives/directive';
import {CELL_VALUE_NAME} from 'ng/definition';

const stringify = angular.$$stringify; // eslint-disable-line angular/no-private-call

class CellValue extends Directive(CELL_VALUE_NAME) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
	}

	onInit() {
		const $scope = this.$scope;
		const $cell = $scope.$cell;
		const element = this.element;
		$scope.$watch(
			() => stringify($cell.value),
			value => element.textContent = value
		);
	}
}

CellValue.$inject = ['$scope', '$element'];

export default {
	restrict: 'A',
	controller: CellValue,
	require: CellValue.require,
	link: CellValue.link,
	scope: false
};