import Directive from '../directive';
import {VIEW_CORE_NAME, HEAD_CORE_NAME} from 'src/definition';

class HeadCore extends Directive(HEAD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope) {
		super();

		this.$scope = $scope;
	}

	onInit() {
	}

	get rows() {
		const view = this.view.model.view();
		const pivot = view.pivot;
		if(pivot){
			return pivot.headers;
		}

		return [];
	}
}

HeadCore.$inject = ['$scope'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$head',
	controller: HeadCore,
	require: HeadCore.require,
	link: HeadCore.link,
	scope: true
};