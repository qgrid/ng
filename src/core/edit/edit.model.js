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
}