export default class MultipleSelection {
	constructor(behavior) {
		this.items = new Set();
		this.behavior = behavior;
	}

	select(item, state, e) {
		if (state) {
			this.items.add(item);
		}
		else {
			this.items.delete(item);
		}

		e.newItems = Array.from(this.items);

		this.behavior.select(item, state, e);
	}

	state(item) {
		return this.items.has(item);
	}

	get view() {
		return Array.from(this.items);
	}
}