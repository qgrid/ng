import Component from '../../view/components/component';
import {ACTION_BAR_CORE_NAME} from '../definition';
import TemplateLink from '@grid/view/components/template/template.link';
import {ActionCoreView} from '@grid/plugin/action/action.core.view';

class ActionCore extends Component {
	constructor($scope, $element, $compile, $templateCache) {
		super(...arguments);

		this.template = new TemplateLink($compile, $templateCache);
		this.$scope = $scope;
		this.$element = $element;
	}

	onInit() {
		const action = this.model;
		const actionCore = new ActionCoreView(action);
		this.$scope.$action = actionCore;

		const gridModel = this.bar.model;
		const templateUrl = 'qgrid.plugin.action.tpl.html';
		const templateScope = this.$scope.$new();
		const link = this.template.link(
			templateUrl,
			gridModel.action().resource,
			[action.id, action.icon]
		);

		link(this.$element, templateScope);
		this.$templateScope = templateScope;
	}

	onDestroy() {
		if (this.$templateScope) {
			this.$templateScope.$destroy();
		}
	}
}

ActionCore.$inject = [
	'$scope',
	'$element',
	'$compile',
	'$templateCache'
];

export default {
	controller: ActionCore,
	require: {
		bar: `^^${ACTION_BAR_CORE_NAME}`
	},
	controllerAs: '$actionPlugin',
	bindings: {
		'model': '<',
	}
};