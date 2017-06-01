import PluginComponent from '../plugin.component';
import {EXPORT_NAME} from '../definition';
import {Command} from '@grid/core/infrastructure';
import {TemplatePath} from '@grid/core/template';
import {Csv} from '@grid/core/export/csv';
import {Json} from '@grid/core/export/json';
import {Xml} from '@grid/core/export/xml';
import {Xlsx} from './xlsx';
import {Pdf} from './pdf';
import {download} from '@grid/core/services/download';

TemplatePath
	.register(EXPORT_NAME, (template) => {
		return {
			model: 'export',
			resource: template.for
		};
	});

const Plugin = PluginComponent('export');
class Export extends Plugin {
	constructor() {
		super(...arguments);
		this.csv = new Command({
			canExecute: () => this.type === 'csv',
			execute: () => {
				const csv = new Csv();
				const data = csv.write(this.rows, this.columns);
				download(this.id, data, `text/${this.type}`);
			}
		});
		this.json = new Command({
			canExecute: () => this.type === 'json',
			execute: () => {
				const json = new Json();
				const data = json.write(this.rows, this.columns, this.exportOptions);
				download(this.id, data, `text/${this.type}`);
			}
		});
		this.xml = new Command({
			canExecute: () => this.type === 'xml',
			execute: () => {
				const xml = new Xml();
				const data = xml.write(this.rows, this.columns);
				download(this.id, data, `application/${this.type}`);
			}
		});
		this.xlsx = new Command({
			canExecute: () => this.type === 'xlsx',
			execute: () => {
				const xlsx = new Xlsx();
				const data = xlsx.write(this.rows, this.columns);
				download(this.id, data, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'xlsx');
			}
		});
		this.pdf = new Command({
			canExecute: () => this.type === 'pdf',
			execute: () => {
				const pdf = new Pdf();
				pdf.write(this.rows, this.columns, this.id);
			}
		});
	}

	get id() {
		return this.model.grid().id;
	}

	get rows() {
		return this.model.data().rows;
	}

	get columns() {
		return this.model.data().columns;
	}

	get resource() {
		return this.model.export().resource;
	}

	get resourceKey() {
		return [this.type];
	}
}

export default Export.component({
	controller: Export,
	controllerAs: '$export',
	bindings: {
		'type': '@',
		'exportOptions': '@'
	}
});