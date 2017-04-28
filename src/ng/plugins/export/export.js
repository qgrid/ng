import PluginComponent from '../plugin.component';
import {EXPORT_NAME} from '../definition';
import Command from 'core/infrastructure/command';
import TemplatePath from 'core/template/template.path';

TemplatePath
	.register(EXPORT_NAME, () => {
		return {
			model: 'export',
			resource: 'content'
		};
	});

const Plugin = PluginComponent('export');
class Export extends Plugin {
	constructor() {
		super(...arguments);
		this.csv = new Command({
			execute: () => {
				alert('export to ' + this.type);
			}
		});
	}
}

export default Export.component({
	controller: Export,
	controllerAs: '$export',
	bindings: {
		'type': '@'
	}
});