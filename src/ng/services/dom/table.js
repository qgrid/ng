import Box from './box';
import Data from './data';
import EventListener from 'core/infrastructure/event.listener';
import {Element} from './element';
import {HEAD_CORE_NAME, BODY_CORE_NAME, FOOT_CORE_NAME} from 'ng/definition';

export default class Table {
	constructor(model, markup, template) {
		this.model = model;
		this.markup = markup;
		this.template = template;
		this._head = null;
		this._body = null;
		this._foot = null;
		this._view = null;
		this.isFocused = this.isFocused.bind(this);
		this.pin = null;
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
			return this._head = new Box(document, head, this.template, HEAD_CORE_NAME);
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
			return this._body = new Box(document, body, this.template, BODY_CORE_NAME);
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
			return this._foot = new Box(document, foot, this.template, FOOT_CORE_NAME);
		}
		return Box.empty;
	}

	get data() {
		return new Data(this.model, this.pin);
	}

	get view() {
		if (this._view) {
			return this._view;
		}

		const view = this.markup.view;
		if (view) {
			return this._view = new Element(view);
		}
		return Element.empty;
	}

	focus() {
		this.markup.table.focus();
	}

	blur() {
		this.markup.table.blur();
	}
}