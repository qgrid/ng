import SelectionState from './selection.state';

export default class SingleSelectionState extends SelectionState {
	constructor(model) {
		super(model);

		this.item = null;

		const keys = model.selection().items;
		super.selectByKeys(keys);
	}

	entries() {
		return this.item ? [this.item] : [];
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
}