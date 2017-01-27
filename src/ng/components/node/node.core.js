import Directive from '../directive';
import TemplateCore from '../template/template.core';
import {VIEW_CORE_NAME, NODE_CORE_NAME} from 'src/definition';

class NodeCore extends Directive(NODE_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateCore($compile, $templateCache);

		Object.defineProperty(this.$scope, '$view', {get: () => this.view});
	}

	onInit() {
		const state = this.view.model.node();
		const link = this.template.link(
			'qgrid.node.cell.tpl.html',
			state.resource
		);

		link(this.$element, this.$scope);
	}

	get title() {
		return this.$scope.$row.key;
	}
}

NodeCore.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache'
];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$node',
	controller: NodeCore,
	require: NodeCore.require,
	link: NodeCore.link
};