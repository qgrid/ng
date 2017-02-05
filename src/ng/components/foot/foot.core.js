import Directive from 'ng/directives/directive';
import {VIEW_CORE_NAME, FOOT_CORE_NAME} from 'src/definition';

class FootCore extends Directive(FOOT_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope) {
		super();

		this.$scope = $scope;
		Object.defineProperty($scope, '$view', {get: () => this.view});
	}

	onInit(){
	}
}

FootCore.$inject = ['$scope'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$foot',
	controller: FootCore,
	require: FootCore.require,
	link: FootCore.link,
	scope: true
};