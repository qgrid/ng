import {CommandManager} from '@grid/core/infrastructure';

export class SelectionCommandManager extends CommandManager {
	constructor(model, manager) {
		super();

		this.model = model;
		this.manager = manager;
	}

	keyDown(f) {
		this.manager.keyDown(f);
	}

	canExecute() {
		return this.model.edit().state !== 'edit'
			&& this.manager.canExecute();
	}
}