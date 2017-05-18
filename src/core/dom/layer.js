import {Element} from './element';

const empty = new Layer();

class Layer extends Element {
	constructor() {
		super();
	}

	static empty() {
		return empty;
	}

	resource() {
	}
}

