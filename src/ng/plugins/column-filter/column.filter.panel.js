import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import {uniq, clone} from 'core/services/utility';
import {getFactory as valueFactory} from 'ng/services/value';
import * as columnService from 'core/column/column.service';

const Plugin = PluginComponent('column-filter-panel');
class ColumnFilterPanel extends Plugin {
	constructor() {
		super(...arguments);

		this.by = new Set();

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
	}

	onInit() {
		const column = columnService.find(this.model.data().columns, this.key);
		this.getValue = valueFactory(column);

		const filterBy = this.model.filter().by[this.key];
		this.by = new Set((filterBy && filterBy.items) || []);
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

	get items() {
		return uniq(this.model.data().rows.map(this.getValue));
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