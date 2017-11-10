/* eslint-disable indent */

import PluginComponent from '../plugin.component';

const Plugin = PluginComponent('legend-core');
class LegendCore extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
	}
}

export default LegendCore.component({
	controller: LegendCore,
	controllerAs: '$legend',
});

/* eslint-enable indent */
