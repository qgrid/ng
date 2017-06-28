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
		const element = this.$element[0];
		const doc = element.ownerDocument;
		this.eventListener = new EventListener(element, new EventManager(this));
		this.upload = new Command({
			execute: () => {
				const input = doc.createElement('input');
				input.type = 'file';
				input.className = 'ng-hide';
				element.appendChild(input);
				input.click();
			}
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
		this.eventListener.on('change', this.load);
	}

	onDestroy() {
		this.eventListener.off();
	}
}

export default Import.component({
	controller: Import,
	controllerAs: '$import',
	bindings: {
		'importOptions': '='
	}
});