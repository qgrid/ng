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

const Plugin = PluginComponent('action-bar');
class ActionBar extends Plugin {
	constructor() {
		super(...arguments);


	}

	onInit() {
		const root = this._root;
		if (root) {
			const shortcut = new Shortcut(root.table, root.commandManager);
			if (this.actions) {
				this.shortcutOff = shortcut.register('actionBar', this.actions.map(act => act.command));
			}

			this.$onChanges = () => {
				if (this.shortcutOff) {
					this.shortcutOff();
					this.shortcutOff = null;
				}

				if (this.actions) {
					this.shortcutOff = shortcut.register('actionBar', this.actions.map(act => act.command));
				}
			};

		}
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
		actions: '<'
	}
});

/* eslint-enable indent */
