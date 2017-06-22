import {VIEW_CORE_NAME} from '@grid/view/definition';
import PluginComponent from '../plugin.component';

const Plugin = PluginComponent('edit-form');
class EditForm extends Plugin {
	constructor() {
		super(...arguments);
	}
	
	onInit() {
		
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