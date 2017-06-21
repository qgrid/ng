import CommandManager from './command.manager';

export class CompositeCommandManager extends CommandManager {
	constructor(manager) {
		super();

		this.manager = manager;
	}

	keyDown(f) {
		return this.manager.keyDown(f);
	}

	canExecute() {
		return this.manager.canExecute();
	}
}