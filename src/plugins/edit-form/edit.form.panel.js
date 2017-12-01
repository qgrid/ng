import PluginComponent from '../plugin.component';
import {EditFormPanelView} from '@grid/plugin/edit-form/edit.form.panel.view';

const Plugin = PluginComponent('edit-form-panel', {inject: []});
class EditFormPanel extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const editFormPanel = new EditFormPanelView(this.model, this);

		this.using(editFormPanel.submitEvent.on(this.onSubmit));
		this.using(editFormPanel.cancelEvent.on(this.onCancel));
		this.using(editFormPanel.resetEvent.on(this.onReset));

		this.shortcutOff = editFormPanel.shortcutOff;
		this.$scope.$editFormPanel = editFormPanel;
	}

	onDestroy() {
		this.shortcutOff();
	}
}

export default EditFormPanel.component({
	controller: EditFormPanel,
	controllerAs: '$editFormPanelPlugin',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&',
		'shortcut': '<',
		'onReset': '&',
		'row': '<'
	}
});