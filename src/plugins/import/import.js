import PluginComponent from '../plugin.component';
import {IMPORT_NAME} from '../definition';
import {TemplatePath} from '@grid/core/template';
import {Command, EventListener} from '@grid/core/infrastructure';
import XLSX from 'xlsx';

function to_json(workbook) {
	let result = [];
	for (let sheetName of workbook.SheetNames) {
		const partial = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 'A'});
		result = partial.concat(result);
	}

	return result;
}

TemplatePath
	.register(IMPORT_NAME, () => {
		return {
			model: 'import',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('import');
class Import extends Plugin {
	constructor() {
		super(...arguments);
		this.eventListener = new EventListener(this, this.$element[0]);
		this.upload = new Command({});
	}

	handleFile(e) {
		const files = e.target.files;
		for (let file of files) {
			const reader = new FileReader();
			reader.onload = e => {
				const columns = [];
				const data = e.target.result;
				const workbook = XLSX.read(data, {type: 'binary'});
				const json = to_json(workbook);
				const headers = Object.keys(json[0]);
				for (let header of headers) {
					columns.push({
						key: header,
						title: header
					});
				}
				this.model.data({rows: json, columns: columns});
			};
			reader.readAsBinaryString(file);
		}
	}


	get resource() {
		return this.model.import().resource;
	}

	onInit() {
		this.eventListener.on('change', this.handleFile);
	}

	onDestroy() {
		this.eventListener.off();
	}
}

export default Import.component({
	controller: Import,
	controllerAs: '$import',
	bindings: {
		'type': '@',
		'importOptions': '@'
	}
});