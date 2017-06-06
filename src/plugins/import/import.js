import PluginComponent from '../plugin.component';
import {IMPORT_NAME} from '../definition';
import {TemplatePath} from '@grid/core/template';
import {Command, EventListener} from '@grid/core/infrastructure';
import {Xlsx} from './xlsx';

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
		const xlsx = new Xlsx();
		const files = e.target.files;
		for (let file of files) {
			const reader = new FileReader();
			reader.onload = e => {
				const data = e.target.result;
				const result = xlsx.read(data);
				this.model.data(result);
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