/* eslint-disable indent */

import PluginComponent from '../plugin.component';
import {ActionBarCoreView} from '@grid/plugin/action-bar/action.bar.core.view';

const Plugin = PluginComponent('action-bar-core', {models: ['action']});
class ActionBarCore extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const root = this._root;
		if (root) {
			const actionBar = new ActionBarCoreView(this.model);
			this.$scope.$actionBar = actionBar;
			this.shortcutOff = actionBar.shortcutOff;
		}
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
	controllerAs: '$actionBarPlugin',
});

/* eslint-enable indent */
