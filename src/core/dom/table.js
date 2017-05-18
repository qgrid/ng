import {Box} from './box';
import {View} from './view';
import {Data} from './data';
import {indexMapperFactory} from './index.map.factory';
import {assignWith} from  '../services/utility';
import {FakeLayer} from './fake';

export class Table {
	constructor(model, markup, context = {}) {
		this.model = model;
		this.markup = markup;
		this.context = assignWith({
			mapper: indexMapperFactory(model),
			layer: () => new FakeLayer()
		}, context);

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
		return new Box(this.context);
	}

	bodyCore() {
		return new Box(this.context);
	}

	footCore() {
		return new Box(this.context);
	}

	viewCore() {
		return new View(this.markup, this.context);
	}
}