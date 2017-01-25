import Directive from '../directive';
import TemplateCore from '../template/template.core';
import {VIEW_CORE_NAME, TOOLBAR_CORE_NAME} from '../../../definition';

class TdCore extends Directive(TOOLBAR_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache, $attrs) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.$attrs = $attrs;
		this.template = new TemplateCore($compile, $templateCache);
	}

	onInit() {
		const target = this.$attrs[TOOLBAR_CORE_NAME];
		const state = this.view.model.toolbar();
		const link = this.template.link(
			`qgrid.toolbar.${target}.tpl.html`,
			state.resource,
			target
		);

		link(this.$element, this.$scope);
	}
}

TdCore.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache',
	'$attrs'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$toolbar',
	controller: TdCore,
	require: TdCore.require,
	link: TdCore.link,
	scope: {}
};