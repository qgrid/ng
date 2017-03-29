// TODO: add empty element
export default class Element {
	constructor(element) {
		this.element = element;
	}

	addClass(name) {
		this.element.classList.add(name);
	}

	removeClass(name) {
		this.element.classList.remove(name);
	}
}