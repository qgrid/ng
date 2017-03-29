import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import {uniq, clone, noop} from 'core/services/utility';
import {getFactory as valueFactory} from 'ng/services/value';
import * as columnService from 'core/column/column.service';

const Plugin = PluginComponent('column-filter-panel', {inject: ['vscroll']});
class ColumnFilterPanel extends Plugin {
	constructor() {
		super(...arguments);

		this.by = new Set();
		this.items = [];

		this.toggle = new Command({
			execute: (item) => {
				if (this.by.has(item)) {
					this.by.delete(item)
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

				this.onSubmit()
			}
		});

		this.cancel = new Command({
			execute: () => this.onCancel()
		});

		this.reset = new Command({
			execute: () => {
				const filterBy = this.model.filter().by[this.key];
				this.by = new Set((filterBy && filterBy.items) || []);
				this.onReset()
			}
		});

		this.vscrollContext = this.vscroll({
			threshold: 20,
			fetch: (skip, take, d) => {
				if (!this.isReady()) {
					d.resolve(0);
					return;
				}

				const filterState = this.model.filter();
				if (filterState.fetch !== noop) {
					filterState
						.fetch(this.key, {
							value: this.getValue.bind(this),
							skip: skip,
							take: take
						})
						.then(items => {
							this.items.push(...items);
							d.resolve(this.items.length + take);
						});
				}
				else {
					if (!this.items.length) {
						const items = uniq(this.model.data().rows.map(this.getValue));
						items.sort();
						this.items = items;
					}

					d.resolve(this.items.length);
				}
			}
		});
	}

	onInit() {
		const column = columnService.find(this.model.data().columns, this.key);
		this.getValue = valueFactory(column);

		const filterBy = this.model.filter().by[this.key];
		this.by = new Set((filterBy && filterBy.items) || []);

		this.vscrollContext.container.reset();
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