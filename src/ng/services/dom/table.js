import Box from './box';
import Data from './data';
import EventListener from 'core/infrastructure/event.listener';

export default class Table {
	constructor(model, markup, template) {
		this.model = model;
		this.markup = markup;
		this.template = template;
		this._head = null;
		this._body = null;
		this._foot = null;
		this.isFocused = this.isFocused.bind(this);
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
		return new EventListener(this, this.markup.document)
			.on('keydown', f);
	}

	get head() {
		if (this._head) {
			return this._head;
		}

		const document = this.markup.document;
		const head = this.markup.head;
		if (document && head) {
			return this._head = new Box(document, head, this.template);
		}

		return Box.empty;
	}

	get body() {
		if (this._body) {
			return this._body;
		}

		const document = this.markup.document;
		const body = this.markup.body;
		if (document && body) {
			return this._body = new Box(document, body, this.template);
		}
		return Box.empty;
	}

	get foot() {
		if (this._foot) {
			return this._foot;
		}

		const document = this.markup.document;
		const foot = this.markup.foot;
		if (document && foot) {
			return this._foot = new Box(document, foot, this.template);
		}
		return Box.empty;
	}

	get data() {
		return new Data(this.model);
	}

	focus() {
		this.markup.table.focus();
	}

}