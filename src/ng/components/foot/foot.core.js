import Directive from 'ng/directives/directive';
import {VIEW_CORE_NAME, FOOT_CORE_NAME} from 'ng/definition';

class FootCore extends Directive(FOOT_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
		Object.defineProperty($scope, '$view', {get: () => this.view});
	}

	onInit(){
		this.view.markup.footView = this.element.parentNode.parentNode; // TODO: make directive
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