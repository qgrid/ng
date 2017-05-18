import Directive from './directive';
import {INDETERMINATE_NAME} from '@grid/view/definition';

class Indeterminate extends Directive(INDETERMINATE_NAME) {
	constructor($scope, $element, $attrs) {
		super();

		this.$scope = $scope;
		this.$element = $element;
		this.$attrs = $attrs;
	}

	onInit() {
		this.$scope.$watch(this.$attrs[INDETERMINATE_NAME], (newVal) => {
			this.$element[0].indeterminate = !!newVal;
		});
	}
}

Indeterminate.$inject = ['$scope', '$element', '$attrs'];

export default {
	restrict: 'A',
	controller: Indeterminate,
	require: Indeterminate.require,
	link: Indeterminate.link,
	scope: false
};

