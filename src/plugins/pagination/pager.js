import PluginComponent from '../plugin.component';
import {PAGER_NAME} from '../definition';
import {TemplatePath} from '@grid/core/template';
import {PagerView} from "@grid/plugin/pager/pager.view";

TemplatePath
	.register(PAGER_NAME, () => {
		return {
			model: 'pagination',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('pager');

class Pager extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		this.$scope.$pager = new PagerView(this.model);
	}
}

export default Pager.component({
	controller: Pager,
	controllerAs: '$pagerPlugin',
	bindings: {
		'paginationSize': '<size',
		'paginationSizeList': '<sizeList',
		'mode': '@'
	}
});