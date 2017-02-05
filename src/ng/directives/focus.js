import Directive from './directive';
import {FOCUS_NAME} from 'src/definition';

class Focus extends Directive(FOCUS_NAME) {
	constructor($scope, $element, $attrs) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
		this.$attrs = $attrs;
	}

	onInit() {
		if (!this.$attrs.tabindex) {
			this.element.setAttribute('tabindex', -1);
		}
		this.$scope.$evalAsync(() => this.element.focus());
	}
}

Focus.$inject = ['$scope', '$element', '$attrs'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$focus',
	controller: Focus,
	require: Focus.require,
	link: Focus.link
};