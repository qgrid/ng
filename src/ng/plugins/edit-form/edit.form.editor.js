import PluginComponent from '../plugin.component';
import cellBuilder from 'ng/components/cell/cell.build';

const Plugin = PluginComponent('edit-form-editor');
class EditFormBody extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const build = cellBuilder(this.template, 'edit');
		const link = build('form', this.model, this.editor.cell.column);
		const templateScope = this.$scope.$new();
		templateScope.$editor = this.editor;
		link(this.$element, templateScope);
	}
}

export default EditFormBody.component({
	controller: EditFormBody,
	controllerAs: '$editor',
	bindings: {
		editor: '<'
	}
});