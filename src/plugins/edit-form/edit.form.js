import {VIEW_CORE_NAME} from '@grid/view/definition';
import PluginComponent from '../plugin.component';
import {EditFormView} from '@grid/plugin/edit-form/edit.form.view';

const Plugin = PluginComponent('edit-form');
class EditForm extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const editForm = new EditFormView(this.model, this);

		this.using(editForm.submitEvent.on(this.onSubmit));
		this.using(editForm.cancelEvent.on(this.onCancel));

		this.$scope.$editForm = editForm;
	}
}

export default EditForm.component({
	controller: EditForm,
	controllerAs: '$editForm',
	require: {
		view: `^^${VIEW_CORE_NAME}`
	},
	bindings: {
		'onSubmit': '&',
		'onCancel': '&',
		'key': '<',
		'title': '@',
		'row': '<data'
	}
});