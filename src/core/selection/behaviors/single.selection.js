import Selection from './selection';

export default class SingleSelection extends Selection {
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

	get view() {
		return this.item ? [this.item] : [];
	}
}