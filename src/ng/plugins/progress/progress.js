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

class Progress extends PluginComponent('progress', ['progress']) {
	constructor() {
		super(...arguments);
	}

	get busy() {
		return this.model.progress().isBusy;
	}

	onInitCore() {
		this.model.progressChanged.watch(e => {
			if (e.changes.isBusy.newValue !== e.changes.isBusy.oldValue && e.state.isBusy) {
				this.show();
			} else {
				this.hide();
			}
		});

		super.onInitCore();
	}

}

export default Progress.component({
	controller: Progress,
	controllerAs: '$progress',
	bindings: {
		'isBusy': '='
	}
});