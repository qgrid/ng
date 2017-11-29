import Component from '../../view/components/component';
import {ACTION_NAME, ACTION_BAR_NAME} from '../definition';
import {ActionView} from '@grid/plugin/action/action.view';
import {TemplatePath} from '@grid/core/template';

TemplatePath
	.register(ACTION_NAME, (template, action) => {
		return {
			model: 'action',
			resource: action.id
		};
	});

class Action extends Component {
	constructor($scope) {
		super(...arguments);

		this.$scope = $scope;
	}

	onInit() {
		const context = {
			id: this.id,
			icon: this.icon,
			title: this.title,
			command: this.command
		};

		const action = new ActionView(this.model, context);
		this.$scope.$action = action;
	}

	get model() {
		return this.bar.root.model;
	}
}

Action.$inject = ['$scope'];

export default {
	controller: Action,
	require: {
		bar: `^^${ACTION_BAR_NAME}`
	},
	controllerAs: '$actionPlugin',
	bindings: {
		'id': '@',
		'icon': '@',
		'title': '@',
		'command': '<'
	}
};