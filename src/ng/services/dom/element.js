import ElementCore from './elementCore';
const empty = new ElementCore();
export default class Element {
	constructor(element) {
		this.element = element;
	}

	static get empty() {
		return empty;
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