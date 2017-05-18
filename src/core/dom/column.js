import {Cell} from './cell';
import {Element} from './element';

const empty = new Column();
export class Column extends Element {
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