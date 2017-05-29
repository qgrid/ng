import {FakeElement} from './fake';

const fakeElement = new FakeElement();
export class Unit {
	constructor() {
		this.classList = new Set();
	}

	rect() {
		return this.getElement().getBoundingClientRect();
	}

	addClass(name) {
		this.addClassCore(name);
	}

	removeClass(name) {
		this.removeClassCore(name);
	}

	clearClassList() {
		for (let cls of this.classList.values()) {
			this.removeClassCore(cls);
		}

		this.classList.clear();
	}

	width() {
		return this.getElement().clientWidth;
	}

	height() {
		return this.getElement().clientHeight;
	}

	getElement() {
		return this.getElementCore() || fakeElement;
	}

	addClassCore(name) {
		this.classList.add(name);
		this.getElement().classList.add(name);
	}

	removeClassCore(name) {
		this.classList.delete(name);
		this.getElement().classList.remove(name);
	}

	getElementCore() {
		return null;
	}
}