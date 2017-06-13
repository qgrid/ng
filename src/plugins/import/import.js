import {TemplatePath} from '@grid/core/template';
import PluginComponent from '../plugin.component';
import {IMPORT_NAME} from '../definition';
import {readFile} from './read';
import {Command, EventListener, EventManager} from '@grid/core/infrastructure';

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
		this.eventListener = new EventListener(this.$element[0], new EventManager(this));
		this.upload = new Command({});
	}

	handleFile(e) {
		const files = e.target.files;

		for (let file of files) {
			const reader = new FileReader();
			reader.onload = e => {
				readFile(e, file, this.model);
			};
			reader.readAsBinaryString(file);
		}
	}

	get columns() {
		return this.model.data().columns;
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