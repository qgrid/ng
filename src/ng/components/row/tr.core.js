import Directive from 'ng/directives/directive';
import {VIEW_CORE_NAME, TR_CORE_NAME} from 'ng/definition';
import {Element as DomElement} from 'core/services/dom';

class TrCore extends Directive(TR_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element) {
		super();

		this.$scope = $scope;
		this.element = $element[0];
	}

	onInit() {
		const model = this.view.model;
		const styleState = model.style();
		const dom = new DomElement(this.element);
		styleState.row(this.row, dom);
	}

	get row() {
		return this.$scope.$row;
	}
}

TrCore.$inject = [
	'$scope',
	'$element'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$tr',
	controller: TrCore,
	require: TrCore.require,
	link: TrCore.link
};