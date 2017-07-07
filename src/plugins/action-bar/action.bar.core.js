/* eslint-disable indent */

import PluginComponent from '../plugin.component';
import {Shortcut} from '@grid/core/shortcut';

const Plugin = PluginComponent('action-bar-core', {models: ['action']});
class ActionBarCore extends Plugin {
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

					this.shortcutOff = shortcut
						.register(e.state.items.map(act => act.command));
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

export default ActionBarCore.component({
	controller: ActionBarCore,
	controllerAs: '$actionBar',
});

/* eslint-enable indent */
