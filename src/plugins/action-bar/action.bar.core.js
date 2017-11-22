/* eslint-disable indent */

import PluginComponent from '../plugin.component';

const Plugin = PluginComponent('action-bar-core', {models: ['action']});
class ActionBarCore extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const root = this._root;
		if (root) {
			const actionState = this.model.action(); 
			const shortcut = actionState.shortcut;
			const commandManager = actionState.manager; 
			this.using(this.model.actionChanged.watch(e => {
				if (e.hasChanges('items')) {
					if (this.shortcutOff) {
						this.shortcutOff();
						this.shortcutOff = null;
					}

					const commands = e.state.items.map(act => act.command);
					this.shortcutOff = shortcut.register(commandManager, commands);
				}
			}));
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
