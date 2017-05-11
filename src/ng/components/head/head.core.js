import Directive from 'ng/directives/directive';
import {VIEW_CORE_NAME, HEAD_CORE_NAME} from 'ng/definition';

class HeadCore extends Directive(HEAD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope) {
		super();

		// this.$scope should be set cause it used by box.js
		this.$scope = $scope;
		Object.defineProperty($scope, '$view', {get: () => this.view});
	}
}

HeadCore.$inject = ['$scope'];

export default {
	restrict: 'A',
	bindToController: {},
	controllerAs: '$head',
	controller: HeadCore,
	require: HeadCore.require,
	link: HeadCore.link,
	scope: true
};