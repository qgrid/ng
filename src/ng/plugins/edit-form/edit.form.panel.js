import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';

const Plugin = PluginComponent('edit-form-panel', {inject: []});
class EditFormPanel extends Plugin {
	constructor() {
		super(...arguments);

		this.editors = [];

		this.register = editor => this.editors.push(editor);

		this.submit = new Command({
			execute: () => {
				this.editors.forEach(e => e.commit());
				this.onSubmit()
			}
		});

		this.cancel = new Command({
			execute: () => this.onCancel()
		});

		this.reset = new Command({
			execute: () => {
				this.editors.forEach(e => e.reset());
				this.onReset()
			}
		});
	}

	onDestroy() {
		this.editors = [];
	}

	register(editor) {
		this.editors.push(editor);
	}
}

export default EditFormPanel.component({
	controller: EditFormPanel,
	controllerAs: '$editFormPanel',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&',
		'key': '<',
		'row': '<'
	}
});