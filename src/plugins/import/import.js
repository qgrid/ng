import {IMPORT_NAME} from '../definition';
import PluginComponent from '../plugin.component';
import {TemplatePath} from '@grid/core/template';
import {ImportView} from '@grid/plugin/import/import.view';

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
		const context = {
			element: this.$element[0],
			importOptions: this.importOptions
		};
		this.$scope.$import = new ImportView(this.model, context);
	}
}

export default Import.component({
	controller: Import,
	controllerAs: '$importPlugin',
	bindings: {
		'importOptions': '='
	}
});