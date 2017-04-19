import PluginComponent from '../plugin.component';

const Plugin = PluginComponent('edit-form-panel', {inject: []});
class EditFormPanel extends Plugin {
	constructor() {
		super(...arguments);
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