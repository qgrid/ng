import {PluginView} from '../plugin.view';
import {Command} from '@grid/core/command';
import {EventListener, EventManager} from '@grid/core/infrastructure';
import {upload} from '@grid/core/services/upload';
import {readFile} from './read';

export class ImportView extends PluginView {
	constructor(model, context) {
		super(...arguments);
		this.importOptions = context.importOptions;
		const element = context.element;
		this.eventListener = new EventListener(element, new EventManager(this));
		this.using(this.eventListener.on('change', this.load));
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
}
