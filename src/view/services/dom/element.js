export class ElementCore {
	constructor() {
	}

	get model() {
		return null;
	}

	rect() {
		return {
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			width: 0,
			height: 0
		};
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

const empty = new ElementCore();
export class Element {
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


export class Elements extends Element {
	constructor(elements) {
		super(element[0]);
		this.elements = elements;
	}

	static get empty() {
		return empty;
	}

	rect() {
		// TODO: get rid of getBoudngingClientRect

		const rects = this.elements.map(element => element.getBoundingClientRect());
		const result = {
			left: rects.min(r => r.left),
			right: rects.max(r => r.right),
			top: rects.min(r => r.top),
			bottom: rects.max(r => r.bottom)
		};
		return result;
	}

	addClass(name) {
		this.elements.forEach(element => element.classList.add(name));
	}

	removeClass(name) {
		this.elements.forEach(element => element.classList.remove(name));
	}

	get width() {
		return this.elements.sum(element => element.clientWidth);
	}

	get height() {
		return this.elements.max(element => element.clientHeight);
	}
}