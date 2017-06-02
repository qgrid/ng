/* eslint-disable indent */

import PluginComponent from '../plugin.component';
import {Command} from '@grid/core/infrastructure';
import {ACTION_BAR_NAME} from '../definition';
import {TemplatePath} from '@grid/core/template';

TemplatePath
	.register(ACTION_BAR_NAME, () => {
		return {
			model: 'action',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('action-bar');
class ActionBar extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
	}
}

export default ActionBar.component({
	controller: ActionBar,
	controllerAs: '$actionBar',
	bindings: {
		actions: '<'
	}
});

/* eslint-enable indent */
