import SelectionBehavior from './selection.behavior';

export default class SingleSelection extends SelectionBehavior {
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
		return item === this.item;
	}

	clearCore() {
		this.item = null;
	}

	get view() {
		return this.item ? [this.item] : [];
	}
}