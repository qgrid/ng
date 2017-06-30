import Component from '../../view/components/component';
import {ACTION_NAME, ACTION_BAR_NAME} from '../definition';
import {Action as ActionItem} from '@grid/core/infrastructure/action';
import {TemplatePath} from '@grid/core/template';

TemplatePath
	.register(ACTION_NAME, (template) => {
		return {
			model: 'action',
			resource: template.for
		};
	});

class Action extends Component {
	constructor() {
		super(...arguments);
	}

	execute() {
		return this.command.execute();
	}

	canExecute() {
		return this.command.canExecute();
	}

	onInit() {
		const model = this.model;
		const actions = Array.from(model.action().items);
		actions.push(new ActionItem(this.command, this.title, this.icon));
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