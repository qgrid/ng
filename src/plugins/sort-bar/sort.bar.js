/* eslint-disable indent */

import PluginComponent from '../plugin.component';
import {Command} from '@grid/core/infrastructure';
import * as SortSevice from '@grid/core/sort/sort.service';
import {SORT_BAR_NAME} from '../definition';
import {TH_CORE_NAME} from '@grid/view/definition';
import {TemplatePath} from '@grid/core/template';

TemplatePath
	.register(SORT_BAR_NAME, () => {
		return {
			model: 'sort',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('sort-bar');
class SortBar extends Plugin {
	constructor() {
		super(...arguments);

		this.newSort = null;
		this.selectedItems = null;

		this.replace = new Command({
				execute: key => {
					const sort = this.model.sort;

					sort({
						by: key.map(item => ({[item]: 'asc'}))
					}, {
						source: 'sort.bar'
					});
				},
				canExecute: () => this.columns.length > 0
			}
		);

		this.add = new Command({
				execute: key => {
					const sort = this.model.sort;
					const state = sort();
					const entry = {[key]: 'asc'};
					const temp = state.by.concat(entry);

					this.selectedItems = temp.slice();

					sort({
						by: temp
					}, {
						source: 'sort.bar'
					});

					this.newSort = null;
				},
				canExecute: () => this.columns.length > 0
			}
		);

		this.remove = new Command({
			execute: entry => {
				const sort = this.model.sort;
				const state = sort();

				const key = SortSevice.key(entry);
				const index = SortSevice.index(state.by, key);

				const temp = Array.from(state.by);
				temp.splice(index, 1);
				this.selectedItems = temp.slice();

				sort({
					by: temp
				}, {
					source: 'sort.bar'
				});
			}
		});

		this.drop = new Command({
			canExecute: e => e.source && e.source.key === TH_CORE_NAME && this.add.canExecute(e.source.value),
			execute: e => this.add.execute(e.source.value)
		});
	}

	onInit() {
		const sortBy = this.model.sort().by;
		sortBy.forEach(key => this.add.execute(key));
	}

	get resource() {
		return this.model.sort().resource;
	}

	get columns() {
		return this.model.data().columns;
	}

	get sorts() {
		return this.model.sort().by;
	}

	title(entry) {
		const key = SortSevice.key(entry);
		const columns = this.columns;
		const index = columns.findIndex(c => c.key === key);
		return index >= 0 ? columns[index].title : '';
	}
}

export default SortBar.component({
	controller: SortBar,
	controllerAs: '$sortBar'
});

/* eslint-enable indent */
