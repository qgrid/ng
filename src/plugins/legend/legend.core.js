/* eslint-disable indent */
import TemplateLink from '@grid/view/components/template/template.link';

import PluginComponent from '../plugin.component';

const Plugin = PluginComponent('legend-core', {inject: ['$element', '$scope', '$compile', '$templateCache']});
class LegendCore extends Plugin {
	constructor() {
		super(...arguments);

		this.template = new TemplateLink(this.$compile, this.$templateCache);
	}

	onInit() {
		const link = this.template.link(
			'qgrid.plugin.legend-core.tpl.html',
			this.resource,
			['content', '$default']
		);

		link(this.$element, this.$scope);
	}

	get resource() {
		return this.model.legend().resource;
	}
}

export default LegendCore.component({
	controller: LegendCore,
	controllerAs: '$legend',
});

/* eslint-enable indent */
