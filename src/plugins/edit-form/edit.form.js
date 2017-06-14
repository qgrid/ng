import {VIEW_CORE_NAME} from '@grid/view/definition';
import PluginComponent from '../plugin.component';
import {Command} from '@grid/core/infrastructure';
import {noop} from '@grid/core/utility';
import {RowEditor} from '@grid/core/edit/edit.row.editor';

const Plugin = PluginComponent('edit-form');
class EditForm extends Plugin {
	constructor() {
		super(...arguments);

		this.submit = new Command({
			execute: () => {
				this.editor.commit();
			}
		});

		this.cancel = new Command({
			execute: noop
		});

		this.reset = new Command({
			execute: () => {
				this.editor.editors.forEach(e => e.reset());
			}
		});
	}

	onInit() {
		this.editor = new RowEditor(this.row, this.model.data().columns);
	}
}

export default EditForm.component({
	controller: EditForm,
	controllerAs: '$editForm',
	require: {
		view: `^^${VIEW_CORE_NAME}`
	},
	bindings: {
		'key': '<',
		'title': '@',
		'row': '<data'
	}
});