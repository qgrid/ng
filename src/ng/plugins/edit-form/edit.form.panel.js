import PluginComponent from '../plugin.component';
import RowEditor from 'core/edit/edit.row';
import cellBuilder from 'ng/components/cell/cell.build';

const Plugin = PluginComponent('edit-form-panel', {inject: []});
class EditFormPanel extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const templateScope = this.$scope.$new();
		const editor = angular.element('<div layout="column"></div>');

		this.editor = new RowEditor(this.$row, this.model.data().columns);
		this.editor.editors.map(e => {
			const build = cellBuilder(this.template, 'edit');
			const link = build('body', this.model, e.column);
			const element = angular.element('<div></div>');

			link(element, templateScope);
			editor.append(element);
		});

		const cur = this.$element[0];
		const ch = cur.children[0].children[0];
		angular.element(ch).append(editor);
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