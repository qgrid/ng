import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command'
import * as SortSevice from 'core/sort/sort.service';
import {SORTBAR_NAME} from '../definition';
import {TH_CORE_NAME} from 'ng/definition';
import TemplatePath from 'core/template/template.path';

TemplatePath
	.register(SORTBAR_NAME, () => {
		return {
			model: 'sort',
			resource: 'content'
		};
	});

class Sortbar extends PluginComponent('sortbar') {
	constructor() {
		super(...arguments);

		this.newSort = null;
		this.add = new Command({
				execute: key => {
					const sort = this.model.sort;
					const state = sort();
					const entry = {[key]: 'asc'};
					sort({by: state.by.concat(entry)});
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

				sort({
					by: temp
				});
			}
		});

		this.drop = new Command({
			canExecute: e => e.source.key === TH_CORE_NAME && this.add.canExecute(e.source.value),
			execute: e => this.add.execute(e.source.value)
		});
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

export default Sortbar.component({
	controller: Sortbar,
	controllerAs: '$sortbar'
});