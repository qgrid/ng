import SelectionState from './selection.state';

export default class MultipleSelectionState extends SelectionState {
	constructor(model, key) {
		super(model, key);

		this.items = new Map();
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

	get view() {
		return Array.from(this.items.values());
	}
}