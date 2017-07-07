import Component from '../../view/components/component';
import {ACTION_NAME, ACTION_BAR_NAME} from '../definition';
import {Action as ActionItem} from '@grid/core/behavior';
import {TemplatePath} from '@grid/core/template';

TemplatePath
	.register(ACTION_NAME, (template, action) => {
		return {
			model: 'action',
			resource: action.id
		};
	});

class Action extends Component {
	constructor() {
		super(...arguments);
	}

	execute() {
		return this.command && this.command.execute();
	}

	canExecute() {
		return this.command && this.command.canExecute();
	}

	onInit() {
		const model = this.model;
		const action = new ActionItem(this.command, this.title, this.icon);
		action.id = this.id;

		const actions = Array.from(model.action().items);
		actions.push(action);

		model.action({
			items: actions
		});
	}

	get model() {
		return this.bar.root.model;
	}
}

export default {
	controller: Action,
	require: {
		bar: `^^${ACTION_BAR_NAME}`
	},
	controllerAs: '$action',
	bindings: {
		'id': '@',
		'icon': '@',
		'title': '@',
		'command': '<'
	}
};