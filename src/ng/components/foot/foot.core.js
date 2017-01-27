import Directive from '../directive';
import {VIEW_CORE_NAME, FOOT_CORE_NAME} from '../../../definition';

class FootCore extends Directive(FOOT_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope) {
		super();

		this.$scope = $scope;
	}

	onInit() {
		this.$scope.$view = this.view;
		var columns = this.view.columns;

		for (let i = 0, length = columns.length; i < length; i++) {
			if (columns[i].hasOwnProperty('aggregation')) {
				this.view.model.foot().count++;
				break;
			}
		}
	}

	get count() {
		const state = this.view.model.foot();
		return state.count;
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