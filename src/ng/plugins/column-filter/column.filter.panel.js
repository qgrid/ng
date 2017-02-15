import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import {uniq} from 'core/services/utility';
import {getFactory as valueFactory} from 'ng/services/value';
import * as columnService from 'core/column/column.service';

const Plugin = PluginComponent('column-filter-panel');
class ColumnFilterPanel extends Plugin {
	constructor() {
		super(...arguments);

		this.toggle = new Command({
			execute: column => {
			}
		});

		this.submit = new Command({
			execute: () => this.onSubmit()
		});

		this.cancel = new Command({
			execute: () => this.onCancel()
		});

		this.reset = new Command({
			execute: () => this.onReset()
		});
	}

	onInit() {
		const column = columnService.find(this.model.data().columns, this.key);
		this.getValue = valueFactory(column);
	}

	state(item) {
		const filter = this.model.filter().by[this.key];
		return filter && filter.hasOwnProperty(item);
	}

	get items() {
		return uniq(this.model.data().rows.map(this.getValue));
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