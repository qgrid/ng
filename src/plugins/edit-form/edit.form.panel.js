import PluginComponent from '../plugin.component';
import {Command} from '@grid/core/infrastructure';
import {RowEditor} from '@grid/core/edit/edit.row.editor';
import {noop, isUndefined} from '@grid/core/utility';

const Plugin = PluginComponent('edit-form-panel', {inject: []});
class EditFormPanel extends Plugin {
	constructor() {
		super(...arguments);

		this.submit = this.commands.submit;

		this.cancel = this.commands.cancel;

		this.reset = this.commands.reset;

		this.shortcutOff = noop;
	}

	onInit() {
		this.editor = new RowEditor(this.row, this.model.data().columns);

		if (!isUndefined(this.shortcut)) {
			this.shortcutOff = this.shortcut.register('editFormManagement', new Map(
				Object.entries(this.commands)
			));
		}
	}

	get commands() {
		const commands = {
			submit: new Command({
				shortcut: 'ctrl+s',
				execute: () => {
					this.editor.commit();
					this.onSubmit();
				}
			}),
			cancel: new Command({
				shortcut: 'Escape',
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