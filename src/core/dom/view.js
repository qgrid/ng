import {Container} from './container';
import {EventListener} from '../infrastructure';

export class View extends Container {
	constructor(markup, context) {
		super();

		this.markup = markup;
		this.context = context;
		this.layers = new Map();
	}

	focus() {
		this.markup.table.focus();
	}

	blur() {
		this.markup.table.blur();
	}

	isFocused() {
		const markup = this.markup;
		const target = markup.table;
		let current = markup.document.activeElement;
		while (current) {
			if (current === target) {
				return true;
			}

			current = current.parentNode;
		}

		return false;
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

	scrollLeft(value) {
		const markup = this.markup;
		if (markup.head) {
			markup.head.scrollLeft = value;
		}

		if (markup.foot) {
			markup.foot.scrollLeft = value;
		}
	}

	scrollTop() {
	}

	getElementCore() {
		return this.markup.view;
	}
}