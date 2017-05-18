import {Element} from './element';

export class Cell extends Element {
	constructor(model = null, element = null) {
		super(element);

		this.model = model;
	}
}