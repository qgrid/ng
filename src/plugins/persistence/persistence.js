import PluginComponent from '../plugin.component';
import {Action} from '@grid/core/action';
import {Command} from '@grid/core/command';

const Plugin = PluginComponent('persistence', {
	inject: ['qgrid']
});
class Peresistence extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const model = this.model;

		const actions = [
			new Action(
				new Command({
					execute: () => {},
					shortcut: 'F3'
				}),
				'Load/Save',
				'history'
			)
		];

		model
			.action({
				items: actions.concat(model.action().items)
			});
	}
}

export default Peresistence.component({
	controller: Peresistence,
	controllerAs: '$persistence',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&'
	}
});