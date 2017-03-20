export default class HighlightBehavior {
	constructor(model, markup, cellsBuilder) {
		this.model = model;
		this.markup = markup;
		this.cellsBuilder = cellsBuilder;
		
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

	cells(items) {
		return this.cellsBuilder(items);
	}

	applyCore() {
	}

	clearCore() {
	}

	stateCore() {
	}

}