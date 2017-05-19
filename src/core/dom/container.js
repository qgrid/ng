import {Unit} from './unit';

export class Container extends Unit {
	constructor(elements) {
		super();

		this.elements = elements;
	}

	rect() {
		const rects = this.elements.map(element => element.getBoundingClientRect());
		const top = rects.min(r => r.top);
		const left = rects.min(r => r.left);
		const bottom = rects.max(r => bottom);
		const right = rects.max(r => r.right);
		return {
			height: bottom - top,
			width: right - left
		};
	}

	addClass(name) {
		this.elements.forEach(element => element.classList.add(name));
	}

	removeClass(name) {
		this.elements.forEach(element => element.classList.remove(name));
	}

	width() {
		return this.elements.max(element => element.clientWidth);
	}

	height() {
		return this.elements.max(element => element.clientHeight);
	}
}