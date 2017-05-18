import {Element} from './element';

const empty = new Cell();
export class Cell extends Element {
	constructor() {
		super();
	}

	static empty() {
		return empty;
	}

	get model() {
		return null;
	}
}