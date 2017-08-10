import PluginComponent from '../plugin.component';
import {Command} from '@grid/core/command';
import {uniq, clone, noop} from '@grid/core/utility';
import {getFactory as valueFactory} from '@grid/core/services/value';
import * as columnService from '@grid/core/column/column.service';

const Plugin = PluginComponent('column-filter-panel', {inject: ['vscroll', '$filter', 'qgrid']});
class ColumnFilterPanel extends Plugin {
	constructor() {
		super(...arguments);

		this.by = new Set();
		this.items = [];

		this.toggle = new Command({
			execute: (item) => {
				if (this.by.has(item)) {
					this.by.delete(item);
				}
				else {
					this.by.add(item);
				}
			}
		});

		this.toggleAll = new Command({
			execute: () => {
				const state = !this.stateAll();
				if (state) {
					for (let item of this.items) {
						this.by.add(item);
					}
				}
				else {
					this.by.clear();
				}
			}
		});

		this.submit = new Command({
			execute: () => {
				const filter = this.model.filter;
				const by = clone(filter().by);
				const items = Array.from(this.by);
				if (items.length) {
					by[this.key] = {items: items};
				}
				else {
					delete by[this.key];
				}

				filter({by: by});

				this.onSubmit();
			}
		});

		this.cancel = new Command({
			execute: () => this.onCancel()
		});

		this.reset = new Command({
			execute: () => {
				this.by = new Set([]);
				this.onReset();
			}
		});

		this.resetItems = new Command({
			execute: () => {
				this.items = [];
				this.vscrollContext.container.reset();
			}
		});

		this.vscrollContext = this.vscroll({
			fetch: (skip, take, d) => {
				if (!this.isReady()) {
					d.resolve(0);
					return;
				}

				const model = this.model;
				const filterState = model.filter();
				const service = this.qgrid.service(this.model);
				if (filterState.fetch !== noop) {
					const cancelBusy = service.busy();
					filterState
						.fetch(this.key, {
							value: this.getValue.bind(this),
							skip: skip,
							take: take,
							filter: this.filter
						})
						.then(items => {
							this.items.push(...items);
							d.resolve(this.items.length + take);
							cancelBusy();
						})
						.catch(cancelBusy);
				}
				else {
					const cancelBusy = service.busy();
					try {
						if (!this.items.length) {
							const source = this.model[this.model.columnFilter().source];
							const uniqItems = uniq(source().rows.map(this.getValue));
							const filteredItems = this.$filter('filter')(uniqItems, this.filter);
							filteredItems.sort();
							this.items = filteredItems;
						}

						d.resolve(this.items.length);
					}
					finally {
						cancelBusy();
					}
				}
			}
		});
	}

	onInit() {
		const column = columnService.find(this.model.data().columns, this.key);
		this.getValue = valueFactory(column);

		const filterBy = this.model.filter().by[this.key];
		this.by = new Set((filterBy && filterBy.items) || []);

		this.vscrollContext.settings.threshold = this.model.columnFilter().threshold;
		this.resetItems.execute();
	}

	state(item) {
		return this.by.has(item);
	}

	stateAll() {
		return this.items.every(this.state.bind(this));
	}

	isIndeterminate() {
		return !this.stateAll() && this.items.some(this.state.bind(this));
	}

	onReset() {
	}

	get kind() {
		return 'control';
	}
}

export default ColumnFilterPanel.component({
	controller: ColumnFilterPanel,
	controllerAs: '$columnFilterPanel',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&',
		'key': '<'
	}
});