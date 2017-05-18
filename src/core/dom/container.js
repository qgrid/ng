import {FakeElement} from './fake';

const fakeElement = new FakeElement();
export class Container {
	constructor() {
	}

	rect() {
		return this.getElement().getBoundingClientRect();
	}

	addClass(name) {
		this.getElement().classList.add(name);
	}

	removeClass(name) {
		this.getElement().classList.remove(name);
	}

	get width() {
		return this.getElement().clientWidth;
	}

	get height() {
		return this.getElement().clientHeight;
	}

	getElement() {
		return this.getElementCore() || fakeElement;
	}

	getElementCore() {
		return null;
	}
}