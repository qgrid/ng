import {CommandManager} from '@grid/core/infrastructure';

export class PopupCommandManager extends CommandManager {
	constructor(apply, popup) {
		super(apply);

		this.popup = popup;
	}

	keyDown(f) {
		return this.popup.keyDown(f);
	}

	canExecute() {
		return this.popup.isFocused();
	}
}