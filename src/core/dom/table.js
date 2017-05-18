import {Box} from './box';
import {View} from './view';
import {Data} from './data';

export class Table {
	constructor(model, markup) {
		this.model = model;
		this.markup = markup;

		this._head = null;
		this._body = null;
		this._foot = null;
		this._view = null;
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

	get view() {
		if (this._view) {
			return this._view;
		}

		return this._view = this.viewCore();
	}

	get data() {
		return new Data(this.model);
	}

	headCore() {
		return new Box();
	}

	bodyCore() {
		return new Box();
	}

	footCore() {
		return new Box();
	}

	viewCore() {
		return new View(this.markup);
	}
}