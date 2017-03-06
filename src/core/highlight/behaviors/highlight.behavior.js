export default class HighlightBehavior {
	constructor(model, markup) {
		this.model = model;
		this.markup = markup;
		this.items = new Set();
	}

	apply(items) {
		this.clear();
		this.items = new Set(items);
		this.applyCore(items);
	}

	clear() {
		this.clearCore(this.items);
	}

	destroy() {
		this.clear();
		this.items = new Set();
	}

	applyCore() {
	}

	clearCore() {
	}

	stateCore() {
	}

}