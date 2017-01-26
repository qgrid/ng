import PluginComponent from '../plugin.component';

class Pager extends PluginComponent('qgrid.pager.tpl.html', ['pager']) {
	constructor() {
		super(...arguments);

		this.math = Math;
		this._page = 0; // while don't have vscroll
	}

	get resource() {
		return this.model.pager().resource;
	}

	get pageSize() {
		return this.model.pager().pageSize;
	}

	set pageSize(value) {
		this.model.pager({pageSize: value});
	}

	get pageSizeList() {
		return this.model.pager().pageSizeList;
	}

	get page() {
		return this._page;
	}

	set page(value) {
		this._page = value;
	}

	get total() {
		return this.model.view().rows.length;
	}

	next() {
		this.page = this.page + 1;
	}

	prev() {
		this.page = this.page - 1;
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