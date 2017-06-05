import PluginComponent from '../plugin.component';
import {IMPORT_NAME} from '../definition';
import {TemplatePath} from '@grid/core/template';
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

	get resource() {
		return this.model.import().resource;
	}

	onInit() {
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