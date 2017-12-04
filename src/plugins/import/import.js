import {IMPORT_NAME} from '../definition';
import PluginComponent from '../plugin.component';
import {TemplatePath} from '@grid/core/template';
import {ImportView} from '@grid/plugin/import/import.view';
import {EventListener, EventManager} from '@grid/core/infrastructure';

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
	}

	onInit() {
		const element = this.$element[0];
		const eventListener = new EventListener(element, new EventManager(this));
		const context = {
			element,
			options: this.options
		};
		const view = new ImportView(this.model, context);

		this.$scope.$import = view;
		this.using(eventListener.on('change', view.load));
	}

	get resource() {
		return this.model.import().resource;
	}
}

export default Import.component({
	controller: Import,
	controllerAs: '$importPlugin',
	bindings: {
		'options': '='
	}
});