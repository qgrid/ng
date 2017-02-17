import Selection from './selection';

export default class MultipleSelection extends Selection {
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

	get view() {
		return Array.from(this.items);
	}
}