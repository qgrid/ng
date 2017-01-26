import Directive from '../directive';
import {VIEW_CORE_NAME, TF_CORE_NAME} from '../../../definition';
import TemplateCore from '../template/template.core';

class TfCore extends Directive(TF_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateCore($compile, $templateCache);

		Object.defineProperty(this.$scope, '$view', {get: () => this.view});
	}

	onInit() {
		const state = this.view.model.foot();
		const key = this.$scope.$column.key;
		const index = this.rowIndex;
		const link = this.template.link(
			'qgrid.foot.cell.tpl.html',
			state.resource,
			index === 0 ? key : key + index
		);

		link(this.$element, this.$scope);
	}

	get rowIndex() {
		return this.$scope.$parent.$index;
	}
}

TfCore.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: TfCore,
	require: TfCore.require,
	link: TfCore.link
};