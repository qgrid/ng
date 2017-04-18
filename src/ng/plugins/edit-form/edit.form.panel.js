import PluginComponent from '../plugin.component';
import RowEditor from 'core/edit/edit.row';

const Plugin = PluginComponent('edit-form-panel', {inject: []});
class EditFormPanel extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		this.editor = new RowEditor(this.$row, this.model.data().columns);
	}
}

export default EditFormPanel.component({
	controller: EditFormPanel,
	controllerAs: '$editFormPanel',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&',
		'key': '<',
		'$row': '<row'
	}
});