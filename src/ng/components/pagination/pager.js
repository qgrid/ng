import PluginComponent from '../plugin.component';
import Command from '../../../core/infrastructure/command'

class Pager extends PluginComponent('qgrid.pager.tpl.html', ['pager']) {
	constructor() {
		super(...arguments);

		const ctrl = this;
		this._page = 0; // while don't have vscroll

		this.next = new Command({
			execute: () => ctrl.page = ctrl.page + 1,
			canExecute: () => (ctrl.page + 1) * ctrl.pageSize < ctrl.total
		});

		this.prev = new Command({
			execute: () => ctrl.page = ctrl.page - 1,
			canExecute: () => ctrl.page > 0
		});
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

	get from() {
		return this.page * this.pageSize + 1;
	}

	get to() {
		return Math.min(this.total, (this.page + 1) * this.pageSize)
	}

	get total() {
		return this.model.view().rows.length;
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