import Directive from 'ng/directives/directive';
import {CELL_VALUE_NAME} from 'ng/definition';

const isDate = angular.isDate;
const isArray = angular.isArray;
const toJson = angular.toJson;
const isFunction = angular.isFunction;
const toString = Object.prototype.toString;
const hasCustomToString = obj => isFunction(obj.toString) && obj.toString !== toString;

const stringify = value => {
	if (value == null) { // null || undefined
		return '';
	}

	switch (typeof value) {
		case 'string':
			break;
		case 'number':
			value = '' + value;
			break;
		default:
			if (hasCustomToString(value) && !isArray(value) && !isDate(value)) {
				value = value.toString();
			} else {
				value = toJson(value);
			}
	}

	return value;
};

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