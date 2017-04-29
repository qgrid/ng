import PluginComponent from '../plugin.component';
import Command from 'core/infrastructure/command';
import RowEditor from 'core/edit/edit.row.editor';

const Plugin = PluginComponent('edit-form-panel', {inject: []});
class EditFormPanel extends Plugin {
	constructor() {
		super(...arguments);

		this.submit = new Command({
			execute: () => {
				this.editor.editors.forEach(e => e.commit());
				this.onSubmit()
			}
		});

		this.cancel = new Command({
			execute: () => this.onCancel()
		});

		this.reset = new Command({
			execute: () => {
				this.editor.editors.forEach(e => e.reset());
				this.onReset()
			}
		});
	}

	onInit(){
		this.editor = new RowEditor(this.row, this.model.data().columns);
	}
}

export default EditFormPanel.component({
	controller: EditFormPanel,
	controllerAs: '$editFormPanel',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&',
		'onReset': '&',
		'row': '<'
	}
});