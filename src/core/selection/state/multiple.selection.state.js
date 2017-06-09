import {SelectionState} from './selection.state';

export class MultipleSelectionState extends SelectionState {
	constructor(model, service) {
		super(model, service);

		this.items = new Map();
	}

	entries() {
		return Array.from(this.items.values());
	}

	selectCore(item, state) {
		if (state) {
			this.items.set(this.key(item), item);
		}
		else {
			this.items.delete(this.key(item));
		}
	}

	stateCore(item) {
		return this.items.has(this.key(item));
	}

	clearCore() {
		this.items = new Map();
	}
}