import Component from '../component';
import TemplateLink from '../template/template.link';
import {VIEW_CORE_NAME} from 'src/definition';

class ToolbarCore extends Component {
	constructor($scope, $element, $compile, $templateCache) {
		super();

		this.$element = $element;
		this.$scope = $scope;
		this.template = new TemplateLink($compile, $templateCache);
	}

	onInit() {
		const target = this.position;
		const state = this.view.model.toolbar();
		const link = this.template.link(
			`qgrid.toolbar.${target}.tpl.html`,
			state.resource,
			[target, '$default']
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