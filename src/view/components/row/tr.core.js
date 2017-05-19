import Directive from '@grid/view/directives/directive';
import {VIEW_CORE_NAME, TR_CORE_NAME} from '@grid/view/definition';

class TrCore extends Directive(TR_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $attrs) {
		super();

		this.$scope = $scope;
		this.$attrs = $attrs;
		this.element = $element[0];
	}

	onInit() {
		this.view.bag.set(this.element, this);
		this.view.style.monitor.row.add(this.element);
	}

	onDestroy() {
		this.view.bag.delete(this.element);
		this.view.style.monitor.row.remove(this.element);
	}

	get index() {
		return this.$scope.$index;
	}
}

TrCore.$inject = [
	'$scope',
	'$element',
	'$attrs'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$tr',
	controller: TrCore,
	require: TrCore.require,
	link: TrCore.link,
	scope: false
};