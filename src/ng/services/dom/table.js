import Box from './box';
import Data from './data';

export default class Table {
	constructor(model, markup, template) {
		this.model = model;
		this.markup = markup;
		this.template = template;
		this._head = null;
		this._body = null;
		this._foot = null;
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

	get target() {
		return this.markup.table;
	}

	get document() {
		return this.markup.document;
	}
}