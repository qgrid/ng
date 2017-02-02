import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import {VISIBILITY_NAME} from 'src/definition';
import TemplatePath from 'core/template/template.path';

TemplatePath
	.register(VISIBILITY_NAME, () => {
		return {
			model: 'visibility',
			resource: 'content'
		};
	});

class Visibility extends PluginComponent('qgrid.plugins.visibility.tpl.html') {
	constructor() {
		super(...arguments);


	}

	get resource() {
		return this.model.visibility().resource;
	}


}

export default Visibility.component({
	controller: Visibility,
	controllerAs: '$visibility'
});