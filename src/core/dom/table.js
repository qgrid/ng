import {Head} from './head';
import {Body} from './body';
import {Foot} from './foot';
import {View} from './view';
import {Data} from './data';
import {EventListener} from '../infrastructure';

export default class Table {
	constructor(markup) {
		this.markup = markup;

		this._head = null;
		this._body = null;
		this._foot = null;
		this._view = null;
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

	get head() {
		if (this._head) {
			return this._head;
		}

		return this._head = this.headCore();
	}

	get body() {
		if (this._body) {
			return this._body;
		}

		return this._body = this.bodyCore();
	}

	get foot() {
		if (this._foot) {
			return this._foot;
		}

		return this._foot = this.footCore();
	}

	get data() {
		return new Data(this.model);
	}

	get view() {
		if (this._view) {
			return this._view;
		}

		return this._view = this.viewCore();
	}

	focus() {
		this.markup.table.focus();
	}

	blur() {
		this.markup.table.blur();
	}

	headCore() {
		return new Head(this.markup);
	}

	bodyCore() {
		return new Body(this.markup);
	}

	footCore() {
		return new Foot(this.markup);
	}

	viewCore() {
		return new View(this.markup);
	}
}