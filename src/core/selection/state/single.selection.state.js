import SelectionState from './selection.state';

export default class SingleSelectionState extends SelectionState {
	constructor(model, key) {
		super(model, key);

		this.item = null;
	}

	selectCore(item, state) {
		if (state) {
			this.item = item;
		}
		else {
			this.item = null;
		}
	}

	stateCore(item) {
		return this.key(item) === this.key(this.item);
	}

	clearCore() {
		this.item = null;
	}

	get view() {
		return this.item ? [this.item] : [];
	}
}