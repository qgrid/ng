import {Layer} from './layer';
import {Container} from './container';
import {EventListener} from '../infrastructure';

export class View extends Container {
	constructor(markup) {
		super();

		this.markup = markup;
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


	addLayer() {
		return new Layer();
	}

	removeLayer() {
	}

	getElementCore() {
		return this.markup.view;
	}
}