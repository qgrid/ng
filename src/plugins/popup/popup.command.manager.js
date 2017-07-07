import {CommandManager} from '@grid/core/behavior';

export class PopupCommandManager extends CommandManager {
	constructor(apply, popup) {
		super(apply);

		this.popup = popup;
	}

	filter(commands) {
		if (this.popup.isFocused) {
			return super.filter(commands);
		}

		return [];
	}
}
