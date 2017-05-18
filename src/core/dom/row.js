import {Cell} from './cell';
import {Element} from './element';

const empty = new Row();
class Row extends Element {
	constructor() {
		super();
	}

	static empty() {
		return empty;
	}

	cells() {
		return [];
	}

	cell() {
		return Cell.empty;
	}

	cellCount() {
		return 0;
	}
}