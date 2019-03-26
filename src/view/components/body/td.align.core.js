import Directive from '@grid/view/directives/directive';
import { TD_ALIGN_CORE_NAME } from '@grid/view/definition';
import {TdCtrl} from '@grid/core/cell/td.ctrl';

const classify = TdCtrl.classify;

class TdAlignCore extends Directive(TD_ALIGN_CORE_NAME) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
	}

	onInit() {
		classify(this.element, this.column);
	}

	get column() {
		return this.$scope.$column.model;
	}
}

TdAlignCore.$inject = [
	'$scope',
	'$element'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: TdAlignCore,
	require: TdAlignCore.require,
	link: TdAlignCore.link,
	scope: false
};