import Directive from '../directive';
import {VIEW_CORE_NAME, HEAD_CORE_NAME} from 'src/definition';

class HeadCore extends Directive(HEAD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope) {
		super();

		this.$scope = $scope;
	}

	onInit() {
	}
}

HeadCore.$inject = ['$scope'];

export default {
	restrict: 'A',
	templateUrl: 'qgrid.head.tpl.html',
	bindToController: true,
	controllerAs: '$head',
	controller: HeadCore,
	require: HeadCore.require,
	link: HeadCore.link,
	scope: true
};