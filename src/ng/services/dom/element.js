class ElementCore {
	constructor() {
	}

	get model() {
		return null;
	}

	rect() {
		return {};
	}

	addClass() {
	}

	removeClass() {
	}

	get width() {
		return 0;
	}

	get height() {
		return 0;
	}
}
export default class Element {
	constructor(element) {
		this.element = element;
	}

	static get empty() {
		return new ElementCore();
	}

	rect() {
		return this.element.getBoundingClientRect();
	}

	addClass(name) {
		this.element.classList.add(name);
	}

	removeClass(name) {
		this.element.classList.remove(name);
	}

	get width() {
		return this.element.clientWidth;
	}

	get height() {
		return this.element.clientHeight;
	}
}