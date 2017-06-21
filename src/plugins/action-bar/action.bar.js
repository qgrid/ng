/* eslint-disable indent */

import PluginComponent from '../plugin.component';
import {ACTION_BAR_NAME} from '../definition';
import {TemplatePath} from '@grid/core/template';
import {Shortcut} from '@grid/core/infrastructure';

TemplatePath
	.register(ACTION_BAR_NAME, () => {
		return {
			model: 'action',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('action-bar', {models: ['action']});
class ActionBar extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const root = this._root;
		if (root) {
			const shortcut = new Shortcut(root.commandManager);
			this.model.actionChanged.watch(e => {
				if (e.hasChanges('items')) {
					if (this.shortcutOff) {
						this.shortcutOff();
						this.shortcutOff = null;
					}

					this.shortcutOff = shortcut.register('actionBar', e.state.items.map(act => act.command));
				}
			});
		}
	}

	get actions() {
		return this.model.action().items;
	}

	onDestroy() {
		if (this.shortcutOff) {
			this.shortcutOff();
			this.shortcutOff = null;
		}
	}
}

export default ActionBar.component({
	controller: ActionBar,
	controllerAs: '$actionBar',
	bindings: {
		actionItems: '<actions'
	}
});

/* eslint-enable indent */
