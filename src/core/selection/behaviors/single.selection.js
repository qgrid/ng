export default class SingleSelection {
	constructor(behavior) {
		this.item = null;
		this.behavior = behavior;
	}

	select(item, state, e) {

		if (state) {
			this.item = item;
		}
		else {
			this.item = null;
		}

		e.newItems = state ? [item] : item;

		this.behavior.select(item, state, e);
	}

	state(item) {
		return item === this.item;
	}

	get view() {
		return [this.item];
	}
}