/* eslint-disable indent */
import PluginComponent from '../plugin.component';
import {Command} from '@grid/core/command';
import {TH_CORE_NAME} from '@grid/view/definition';
import {GROUP_BAR_NAME} from '../definition';
import {TemplatePath} from '@grid/core/template';

TemplatePath
	.register(GROUP_BAR_NAME, () => {
		return {
			model: 'group',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('group-bar');
class GroupBar extends Plugin {
	constructor() {
		super(...arguments);

		this.newGroup = null;
		this.selectedItems = null;

		this.replace = new Command({
			source: 'group.bar',
			execute: key => {
				const group = this.model.group;

				group({
					by: [...key]
				});
			},
			canExecute: () => this.columns.length > 0
		});

		this.add = new Command({
			source: 'group.bar',
			execute: key => {
				const group = this.model.group;
				const state = group();
				const temp = state.by.concat(key);

				this.selectedItems = temp.slice();

				group({
					by: temp
				});

				this.newGroup = null;
			},
			canExecute: () => this.columns.length > 0
		});

		this.remove = new Command({
			source: 'group.bar',
			execute: key => {
				const group = this.model.group;
				const state = group();
				const index = state.by.findIndex(g => g === key);
				if (index >= 0) {
					const temp = Array.from(state.by);
					temp.splice(index, 1);

					this.selectedItems = temp.slice();

					group({
						by: temp
					});
				}
			}
		});

		this.drop = new Command({
			source: 'group.bar',
			canExecute: e => e.source && e.source.key === TH_CORE_NAME && this.add.canExecute(e.source.value),
			execute: e => this.add.execute(e.source.value)
		});
	}

	onInit() {
		const groupBy = this.model.group().by;
		groupBy.forEach(key => this.add.execute(key));
	}

	get resource() {
		return this.model.group().resource;
	}

	get columns() {
		return this.model.data().columns;
	}

	get groups() {
		return this.model.group().by;
	}

	title(key) {
		const columns = this.columns;
		const index = columns.findIndex(c => c.key === key);
		return index >= 0 ? columns[index].title : '';
	}
}

export default GroupBar.component({
	controller: GroupBar,
	controllerAs: '$groupBar'
});
/* eslint-enable indent */