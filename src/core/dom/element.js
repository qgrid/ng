import {Container} from './container';

export class Element extends Container {
	constructor(element) {
		super();

		this.element = element;
	}

	getElementCore() {
		return this.element;
	}
}