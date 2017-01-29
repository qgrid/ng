import Directive from '../directive';
import Command from 'core/infrastructure/command';
import {VIEW_CORE_NAME, HEAD_CORE_NAME} from 'src/definition';

class HeadCore extends Directive(HEAD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope) {
		super();

		this.$scope = $scope;
		this.drop = new Command({
			canExecute: e => true,
			execute: e => true
		});
	}

	onInit() {
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