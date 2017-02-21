import Behavior from './highlight.behavior';

export default class CellHighlight extends Behavior {
	constructor(model, markup) {
		super(model, markup);
	}

	applyCore(items) {
		for (let item of items) {
			this.state(item, true);
		}
	}

	clearCore(items) {
		for (let item of items) {
			this.state(item, false);
		}
	}

	state(item, state) {
		return this.stateCore(item, state);
	}
}