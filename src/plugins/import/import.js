import PluginComponent from '../plugin.component';
import {IMPORT_NAME} from '../definition';
import {TemplatePath} from '@grid/core/template';
import {Command, EventListener, Log} from '@grid/core/infrastructure';
import {flatToTree} from '@grid/core/import/import.common';
import XLSX from 'xlsx';

function to_json(workbook) {
	const headers = ['name.first', 'name.last', 'gender', 'birthday', 'contact.address.street', 'contact.address.zip',
		'contact.address.city', 'contact.address.state', 'contact.email', 'contact.region', 'contact.phone', 'likes', 'member.since'];
	let result = [];
	for (let sheetName of workbook.SheetNames) {
		const patial = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: headers});
		result = patial.concat(result);
	}
	return result.slice(1);
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
				const data = e.target.result;
				const workbook = XLSX.read(data, {type: 'binary'});
				const json = to_json(workbook);
				flatToTree(json);
				Log.info(JSON.stringify(json));
				// this.model.data({rows: json});
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