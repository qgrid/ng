import Component from '../Component';
import TemplateCore from '../template/template.core';
import {VIEW_CORE_NAME} from '../../../definition';

class ToolbarCore extends Component {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateCore($compile, $templateCache);
	}

	onInit() {
		const target = this.position;
		const state = this.view.model.toolbar();
		const link = this.template.link(
			`qgrid.toolbar.${target}.tpl.html`,
			state.resource,
			target
		);

		link(this.$element, this.$scope);
	}
}

ToolbarCore.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache',
	'$attrs'
];

export default {
	controllerAs: '$toolbar',
	controller: ToolbarCore,
	require: {
		view: `^^${VIEW_CORE_NAME}`
	},
	bindings: {
		position: '@'
	}
};