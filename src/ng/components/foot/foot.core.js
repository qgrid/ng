import Directive from 'ng/directives/directive';
import {VIEW_CORE_NAME, FOOT_CORE_NAME} from 'ng/definition';

class FootCore extends Directive(FOOT_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element) {
		super();

		// this.$scope should be set cause it used by box.js
		this.$scope = $scope;
		this.element = $element[0];
		Object.defineProperty($scope, '$view', {get: () => this.view});
	}
}

FootCore.$inject = ['$scope', '$element'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$foot',
	controller: FootCore,
	require: FootCore.require,
	link: FootCore.link,
	scope: true
};