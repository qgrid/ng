import {Unit} from './unit';
import {EventListener} from '../infrastructure';

export class View extends Unit {
	constructor(markup, context) {
		super();

		this.markup = markup;
		this.context = context;
		this.layers = new Map();
	}

	focus() {
		const elements = this.elementsCore('table');
		if (elements.length) {
			elements[0].focus();
			return true;
		}

		return false;
	}

	blur() {
		this.elementsCore('table')
			.forEach(element => element.blur());
	}

	isFocused() {
		return this.elementsCore('table')
			.some(element => this.isFocusedCore(element));
	}

	keyDown(f) {
		return new EventListener(this, this.markup.document).on('keydown', f);
	}

	addLayer(name) {
		const layers = this.layers;
		if (layers.has(name)) {
			return layers.get(name);
		}

		const layer = this.context.layer(name);
		layers.set(name, layer);
		return layer;
	}

	removeLayer(name) {
		const layers = this.layers;
		if (layers.has(name)) {
			const layer = layers.get(name);
			layer.destroy();
			layers.delete(name);
			return true;
		}

		return false;
	}

	addClass(name) {
		if (this.markup.view) {
			this.markup.view.classList.add(name);
		}
	}

	removeClass(name) {
		if (this.markup.view) {
			this.markup.view.classList.remove(name);
		}
	}

	scrollLeft(value) {
		const markup = this.markup;
		if (arguments.length) {
			if (markup.head) {
				markup.head.scrollLeft = value;
			}

			if (markup.foot) {
				markup.foot.scrollLeft = value;
			}

			if (markup.body) {
				markup.body.scrollLeft = value;
			}
		}

		return this.getElement().scrollLeft;
	}

	scrollTop(value) {
		if (arguments.length) {
			this.elementsCore('body')
				.forEach(element => element.scrollTop = value);
		}

		return this.getElement().scrollTop;
	}

	rect() {
		const markup = this.markup;
		if (markup.body) {
			return markup.body.getBoundingClientRect();
		}

		return super.rect();
	}

	getElementCore() {
		return this.markup.body;
	}

	isFocusedCore(target) {
		const markup = this.markup;
		let current = markup.document.activeElement;
		while (current) {
			if (current === target) {
				return true;
			}

			current = current.parentNode;
		}

		return false;
	}

	elementsCore(key) {
		const markup = this.markup;
		return [`${key}-left`, key, `${key}-right`]
			.filter(key => markup.hasOwnProperty(key))
			.map(key => markup[key]);
	}
}