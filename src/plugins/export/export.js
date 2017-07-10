import PluginComponent from '../plugin.component';
import {EXPORT_NAME} from '../definition';
import {Command} from '@grid/core/command';
import {TemplatePath} from '@grid/core/template';
import {AppError} from '@grid/core/infrastructure';
import {Csv} from '@grid/core/export/csv';
import {Json} from '@grid/core/export/json';
import {Xml} from '@grid/core/export/xml';
import {Xlsx} from './xlsx';
import {Pdf} from './pdf';
import {download} from './download';

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
				const fileSaver = this.importLib('file');
				const csv = new Csv();
				const data = csv.write(this.rows, this.columns);
				download(fileSaver, this.id, data, `text/${this.type}`);
			}
		});
		this.json = new Command({
			canExecute: () => this.type === 'json',
			execute: () => {
				const fileSaver = this.importLib('file');
				const json = new Json();
				const data = json.write(this.rows, this.columns);
				download(fileSaver, this.id, data, `text/${this.type}`);
			}
		});
		this.xml = new Command({
			canExecute: () => this.type === 'xml',
			execute: () => {
				const fileSaver = this.importLib('file');
				const xml = new Xml();
				const data = xml.write(this.rows);
				download(fileSaver, this.id, data, `application/${this.type}`);
			}
		});
		this.xlsx = new Command({
			canExecute: () => this.type === 'xlsx',
			execute: () => {
				const lib = this.importLib('xlsx');
				const fileSaver = this.importLib('file');
				const xlsx = new Xlsx(lib);
				const data = xlsx.write(this.rows, this.columns);
				download(fileSaver, this.id, data, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'xlsx');
			}
		});
		this.pdf = new Command({
			canExecute: () => this.type === 'pdf',
			execute: () => {
				const pdfLib = this.importLib('pdf');
				const pdf = new Pdf(pdfLib);
				pdf.write(this.rows, this.columns, this.id);
			}
		});
	}

	importLib(name) {
		const lib = this.model.plugin().imports[name];
		if (!lib) {
			switch (name) {
				case 'xlsx': {
					throw new AppError('xlsx', 'To use export plugin for xlsx format please add http://github.com/SheetJS/js-xlsx library to your project');
				}
				case 'file': {
					throw new AppError('fileSaver', 'To use export plugin for file saving please add https://github.com/eligrey/FileSaver.js library to your project');
				}
				case 'pdf': {
					throw new AppError('jsPDF', 'To use export plugin for pdf format please add https://github.com/MrRio/jsPDF and https://github.com/simonbengtsson/jsPDF-AutoTable libraries to your project');
				}
				default: {
					throw new AppError('import library', 'No such library in imports');
				}
			}
		}
		return this.model.plugin().imports[name];
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
		'type': '@'
	}
});