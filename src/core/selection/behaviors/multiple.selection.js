import SelectionBehavior from './selection.behavior';

export default class MultipleSelection extends SelectionBehavior {
	constructor(model) {
		super(model);
		this.items = new Set();
	}

	selectCore(item, state) {
		if (state) {
			this.items.add(item);
		}
		else {
			this.items.delete(item);
		}
	}

	stateCore(item) {
		return this.items.has(item);
	}

	clearCore() {
		this.items = new Set();
	}

	get view() {
		return Array.from(this.items);
	}
}