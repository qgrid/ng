import {EXPORT_NAME} from '../definition';
import PluginComponent from '../plugin.component';
import {TemplatePath} from '@grid/core/template';
import {ExportView} from '@grid/plugin/export/export.view';

TemplatePath
	.register(EXPORT_NAME, template => {
		return {
			model: 'export',
			resource: template.for
		};
	});

const Plugin = PluginComponent('export');

class Export extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		this.$scope.$export = new ExportView(this.model, {type: this.type});
	}

	get resource() {
		return this.model.export().resource;
	}

	get resourceKey() {
		return [this.type];
	}
}

export default Export.component({
	controller: Export,
	controllerAs: '$exportPlugin',
	bindings: {
		'type': '@'
	}
});