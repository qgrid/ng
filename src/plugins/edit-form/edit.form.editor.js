import PluginComponent from '../plugin.component';
import cellBuilder from '@grid/view/components/cell/cell.build';

const Plugin = PluginComponent('edit-form-editor');
class EditFormBody extends Plugin {
	constructor() {
		super(...arguments);
	}

	onInit() {
		const build = cellBuilder(this.template, 'edit');
		const link = build('form', this.model, this.editor.cell.column);
		this.templateScope = this.$scope.$new();
		this.templateScope.$editor = this.editor;
		link(this.$element, this.templateScope);
	}

	onDestroy(){
		if(this.templateScope){
			this.templateScope.$destroy();
			this.templateScope = null;
		}
	}
}

export default EditFormBody.component({
	controller: EditFormBody,
	controllerAs: '$editor',
	bindings: {
		editor: '<'
	}
});