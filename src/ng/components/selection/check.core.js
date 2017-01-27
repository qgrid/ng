import Directive from '../directive';
import TemplateCore from '../template/template.core';
import {VIEW_CORE_NAME, CHECK_CORE_NAME} from '../../../definition';

class CheckCore extends Directive(CHECK_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache, $attrs) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.$attrs = $attrs;
		this.template = new TemplateCore($compile, $templateCache);

		Object.defineProperty(this.$scope, '$view', {get: () => this.view});
	}

	onInit() {
		const target = this.$attrs[CHECK_CORE_NAME];
		const state = this.view.model.check();
		const link = this.template.link(
			`qgrid.check.${target}.tpl.html`,
			state.resource,
			target
		);

		link(this.$element, this.$scope);
	}
}

CheckCore.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache',
	'$attrs'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$check',
	controller: CheckCore,
	require: CheckCore.require,
	link: CheckCore.link
};