import PluginComponent from '../plugin.component';
import {EXPORT_NAME} from '../definition';
import Command from '@grid/core/infrastructure/command';
import TemplatePath from '@grid/core/template/template.path';
import {toCsv} from '@grid/core/export/export.service';
import {download} from '@grid/core/download/download.service';

TemplatePath
	.register(EXPORT_NAME, () => {
		return {
			model: 'export',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('export', {inject: ['$window', '$document']});
class Export extends Plugin {
	constructor() {
		super(...arguments);
		this.csv = new Command({
			canExecute: () => this.type.toLowerCase() === 'csv',
			execute: () => {
				const csv = toCsv(this.rows, this.columns);
				download(csv, this.$window, this.$document);
			}
		});
	}

	get rows() {
		return this.model.data().rows;
	}

	get columns() {
		return this.model.data().columns;
	}
}

export default Export.component({
	controller: Export,
	controllerAs: '$export',
	bindings: {
		'type': '@'
	}
});