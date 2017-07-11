import PluginComponent from '../plugin.component';
import {Command} from '@grid/core/command';
import {RowEditor} from '@grid/core/edit/edit.row.editor';
import {noop, isUndefined} from '@grid/core/utility';

const Plugin = PluginComponent('edit-form-panel', {inject: []});
class EditFormPanel extends Plugin {
	constructor() {
		super(...arguments);


		this.shortcutOff = noop;
	}

	onInit() {
		this.editor = new RowEditor(this.row, this.model.data().columns);

		this.submit = this.commands.submit;
		this.cancel = this.commands.cancel;
		this.reset = this.commands.reset;

		if (!isUndefined(this.shortcut)) {
			this.shortcutOff = this.shortcut.register(new Map(
				Object.entries(this.commands)
			));
		}
	}

	get commands() {
		const commands = {
			submit: new Command({
				shortcut: this.shortcutFactory('commit'),
				execute: () => {
					this.editor.commit();
					this.onSubmit();
				}
			}),
			cancel: new Command({
				shortcut: this.shortcutFactory('cancel'),
				execute: () => this.onCancel()
			}),
			reset: new Command({
				execute: () => {
					this.editor.editors.forEach(e => e.reset());
					this.onReset();
				}
			})
		};

		return commands;
	}

	shortcutFactory(type) {
		const edit = this.model.edit;
		return () => {
			const shortcuts = edit()[type + 'Shortcuts'];
			return shortcuts['form'] || shortcuts['$default'];
		};
	}

	onDestroy() {
		this.shortcutOff();
	}
}

export default EditFormPanel.component({
	controller: EditFormPanel,
	controllerAs: '$editFormPanel',
	bindings: {
		'onSubmit': '&',
		'onCancel': '&',
		'shortcut': '<',
		'onReset': '&',
		'row': '<'
	}
});