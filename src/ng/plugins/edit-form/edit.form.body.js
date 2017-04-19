import PluginComponent from '../plugin.component';
import RowEditor from 'core/edit/edit.row';
import cellBuilder from 'ng/components/cell/cell.build';

const Plugin = PluginComponent('edit-form-body');
class EditFormBody extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const editor = angular.element('<div layout="column"></div>');

		const rowEditor = new RowEditor(this.row, this.model.data().columns);

		this.register(rowEditor);

		rowEditor.editors.map(e => {
			const build = cellBuilder(this.template, 'edit');
			const link = build('form', this.model, e.column);
			const element = angular.element('<div></div>');
			const templateScope = this.$scope.$new();
			templateScope.$editor = e.editor;

			link(element, templateScope);
			editor.append(element);
		});

		this.$element.append(editor);
	}
}

export default EditFormBody.component({
	controller: EditFormBody,
	controllerAs: '$editFormBody',
	bindings: {
		row: '<',
		register: '<?'
	}
});