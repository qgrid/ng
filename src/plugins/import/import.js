import {EventListener, EventManager} from '@grid/core/infrastructure';
import {Command} from '@grid/core/command';
import {TemplatePath} from '@grid/core/template';
import {upload} from '@grid/core/services/upload';
import PluginComponent from '../plugin.component';
import {IMPORT_NAME} from '../definition';
import {readFile} from './read';

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
		const element = this.$element[0];
		this.eventListener = new EventListener(element, new EventManager(this));
		this.upload = new Command({
			source: 'import',
			execute: () => upload(element)
		});
	}

	load(e) {
		const files = e.target.files;

		for (let file of files) {
			const reader = new FileReader();
			reader.onload = e => {
				readFile(e, file, this.model, this.importOptions);
			};
			reader.readAsBinaryString(file);
		}
	}

	get resource() {
		return this.model.import().resource;
	}

	onInit() {
		this.using(this.eventListener.on('change', this.load));
	}
}

export default Import.component({
	controller: Import,
	controllerAs: '$import',
	bindings: {
		'importOptions': '='
	}
});