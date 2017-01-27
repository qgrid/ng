import PluginComponent from '../plugin.component';
import Command from '../../../core/infrastructure/command'

class Pager extends PluginComponent('qgrid.pager.tpl.html', ['pagination']) {
	constructor() {
		super(...arguments);

		const ctrl = this;
		this._page = 0; // while don't have vscroll

		this.next = new Command({
			execute: () => ctrl.current = ctrl.current + 1,
			canExecute: () => (ctrl.current + 1) * ctrl.size < ctrl.total
		});

		this.prev = new Command({
			execute: () => ctrl.current = ctrl.current - 1,
			canExecute: () => ctrl.current > 0
		});
	}

	get resource() {
		return this.model.pagination().resource;
	}

	get size() {
		return this.model.pagination().size;
	}

	set size(value) {
		this.model.pagination({size: value});
	}

	get sizeList() {
		return this.model.pagination().sizeList;
	}

	get current() {
		return this._page;
	}

	set current(value) {
		this._page = value;
	}

	get from() {
		return Math.min(this.total, this.current * this.size + 1);
	}

	get to() {
		return Math.min(this.total, (this.current + 1) * this.size)
	}

	get total() {
		return this.model.view().rows.length;
	}
}

export default Pager.component({
	controller: Pager,
	controllerAs: '$pager',
	bindings: {
		'paginationSize': '<size',
		'paginationSizeList': '<sizeList'
	}
});