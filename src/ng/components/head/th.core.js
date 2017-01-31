import Directive from '../directive';
import {VIEW_CORE_NAME, TH_CORE_NAME} from 'src/definition';
import TemplateCore from '../template/template.core';

class ThCore extends Directive(TH_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateCore($compile, $templateCache);

		Object.defineProperty(this.$scope, '$view', {get: () => this.view});
	}

	onInit() {
		const model = this.view.model;
		const column = this.column;
		const state = model[column.model || 'head']();
		const type = column.type || 'text';

		const link = this.template.link(
			`qgrid.head.${type}.cell.tpl.html`,
			state.resource,
			column.key
		);

		link(this.$element, this.$scope, `head-cell-${type}`);
	}

	get column() {
		return this.$scope.$column.model;
	}
}

ThCore.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$cell',
	controller: ThCore,
	require: ThCore.require,
	link: ThCore.link
};