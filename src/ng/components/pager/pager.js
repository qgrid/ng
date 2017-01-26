import PluginComponent from '../plugin.component';

class Pager extends PluginComponent('qgrid.pager.tpl.html', ['pager']) {
	constructor() {
		super(...arguments);
	}

	get resource() {
		return this.model.pager().resource;
	}
}

export default Pager.component({
	controller: Pager,
	controllerAs: '$pager',
	bindings: {
		'pagerPageSize': '<pageSize',
		'pagerPageSizeList': '<pageSizeList'
	}
});