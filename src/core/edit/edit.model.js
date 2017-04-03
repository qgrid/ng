import Resource from 'core/resource/resource';
import Command from 'core/infrastructure/command';

export default class EditModel {
	constructor() {
		this.resource = new Resource();
		this.mode = null; // cell
		this.editMode = 'view'; // edit
		this.enter = new Command();
		this.commit = new Command();
		this.cancel = new Command();
		this.reset = new Command();
	}

	get commitShortcut() {
		const commitShortcuts = {
			'$default': 'tab|enter',
			'text': 'enter',
			'password': 'ctrl+s',
			'number': 'ctrl+s'
		};
		const navigationState = this.model.navigation();
		const cell = navigationState.active.cell;
		if (cell && commitShortcuts.hasOwnProperty(cell.column.type)) {
			return commitShortcuts[cell.column.type];
		}
		return commitShortcuts['$default'];
	}
}