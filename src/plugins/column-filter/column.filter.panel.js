import PluginComponent from '../plugin.component';
import {Command} from '@grid/core/command';
import {clone, noop} from '@grid/core/utility';
import {getFactory as valueFactory} from '@grid/core/services/value';
import {getFactory as labelFactory} from '@grid/core/services/label';
import * as columnService from '@grid/core/column/column.service';

const Plugin = PluginComponent('column-filter-panel', {inject: ['vscroll', '$filter', 'qgrid']});
class ColumnFilterPanel extends Plugin {
	constructor() {
		super(...arguments);

		this.by = new Set();
		this.items = [];
		this.entries = new Map();

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
				const entries = this.entries;
				const items = Array
					.from(this.by)
					.filter(x => entries.has(x))
					.map(x => clone(entries.get(x)));

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
				const service = this.qgrid.service(model);
				const filterBy = this.model.filter().by[this.key];
				const filterItems = (filterBy && filterBy.items) || [];
				const by = new Set(filterItems);
				if (filterState.fetch !== noop) {
					this.by = by;

					const cancelBusy = service.busy();
					filterState
						.fetch(this.key, {
							value: this.getValue.bind(this),
							skip: skip,
							take: take,
							filter: this.filter
						})
						.then(items => {
							items.forEach(x => {
								this.items.push(x);
								this.entries.set(x, [x]);
							});

							d.resolve(this.items.length + take);
							cancelBusy();
						})
						.catch(cancelBusy);
				}
				else {
					const cancelBusy = service.busy();
					try {
						if (!this.items.length) {
							const source = model[model.columnFilter().source];
							const getValue = this.getValue;
							const getLabel = this.getLabel;
							const entries = this.entries;
							entries.clear();

							const byItems = new Set();
							const uniqItems = [];
							source().rows.map(row => {
								const label = getLabel(row);
								const value = getValue(row);
								if (by.has(value)) {
									byItems.add(label);
								}

								if (!entries.has(label)) {
									entries.set(label, value);
									uniqItems.push(label);
								}
							});

							const filter = this.$filter('filter');
							const filteredItems = filter(uniqItems, this.filter);
							filteredItems.sort();

							this.items = filteredItems;
							this.by = byItems;
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
		this.column = columnService.find(this.model.data().columns, this.key);

		this.getValue = valueFactory(this.column);
		this.getLabel = labelFactory(this.column);

		this.vscrollContext.settings.threshold = this.model.columnFilter().threshold;
		this.resetItems.execute();
	}

	get title(){
		return this.column ? this.column.title : '';
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