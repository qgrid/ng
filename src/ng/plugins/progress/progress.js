import PluginComponent from '../plugin.component';
import {PROGRESS_NAME} from '../definition';
import TemplatePath from 'core/template/template.path';

TemplatePath
	.register(PROGRESS_NAME, () => {
		return {
			model: 'progress',
			resource: 'content'
		};
	});

class Progress extends PluginComponent('progress', ['progress']) {
	constructor() {
		super(...arguments);
	}

	get isBusy() {
		return this.model.progress().isBusy;
	}
}

export default Progress.component({
	controller: Progress,
	controllerAs: '$progress'
});