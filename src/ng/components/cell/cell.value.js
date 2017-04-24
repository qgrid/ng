import Directive from 'ng/directives/directive';
import {CELL_VALUE_NAME} from 'ng/definition';

class CellValue extends Directive(CELL_VALUE_NAME) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
	}

	onInit() {
		const $scope = this.$scope;
		const element = this.element;
		$scope.$watch('$cell.value', value => {
			element.innerText = 	value;
		});
	}
}

CellValue.$inject = ['$scope', '$element'];

export default {
	restrict: 'A',
	controller: CellValue,
	require: CellValue.require,
	link: CellValue.link
};