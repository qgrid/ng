import PluginComponent from '../plugin.component';
// import Command from 'core/infrastructure/command';
import {PROGRESS_NAME} from 'src/definition';
import TemplatePath from 'core/template/template.path';

TemplatePath
	.register(PROGRESS_NAME, () => {
		return {
			model: 'progress',
			resource: 'content'
		};
	});

class Progress extends PluginComponent('progress') {
	constructor() {
		super(...arguments);

	}

	onInit() {

	}


}

export default Progress.component({
	controller: Progress,
	controllerAs: '$progress'
});