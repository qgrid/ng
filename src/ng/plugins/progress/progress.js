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

const Plugin = PluginComponent('progress', {models: ['progress']});
class Progress extends Plugin {
	constructor() {
		super(...arguments);
	}

	get isBusy() {
		const progressState = this.model.progress();
		return progressState.isBusy || progressState.queue.length;
	}
}

export default Progress.component({
	controller: Progress,
	controllerAs: '$progress'
});