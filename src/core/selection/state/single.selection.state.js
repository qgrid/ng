import SelectionState from './selection.state';

export default class SingleSelectionState extends SelectionState {
	constructor(model) {
		super(model);

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
		return this.item && this.key(item) === this.key(this.item);
	}

	clearCore() {
		this.item = null;
	}

	viewCore() {
		return this.item ? [this.item] : [];
	}
}