import Directive from '../directive';
import {VIEW_CORE_NAME, FOOT_CORE_NAME} from 'src/definition';

class FootCore extends Directive(FOOT_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope) {
		super();

		this.$scope = $scope;
	}

	onInit(){
	}
	
	get count() {
		const columns = this.view.columns;
		const state = this.view.model.foot();
		const count = state.resource.count;

		for (let i = 0, length = columns.length; i < length; i++) {
			if (columns[i].hasOwnProperty('aggregation')) {
				return Math.max(count, 1);
			}
		}
		return count;
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