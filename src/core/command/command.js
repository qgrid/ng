import {yes, no} from '../utility/index';

export class Command {
	constructor(context = {}) {
		this.execute = no;
		this.canExecute = yes;
		this.shortcut = '';
		this.priority = 0;

		Object.assign(this, context);
	}

	clone(context = {}) {
		const cmd = new Command(this);
		Object.assign(cmd, context);
		return cmd;
	}
}