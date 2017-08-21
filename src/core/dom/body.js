import {VirtualBox} from './virtual';
import {Box} from './box';
import * as columnService from '../column/column.service';
import {ElementSelector} from './selector';

export class Body extends Box {
	constructor(context, model, markup) {
		super(context, model);

		this.elementSelector = new ElementSelector(markup, 'body');
	}

	getElements(pin) {
		return this.elementSelector.select(pin);
	}
}

export class VirtualBody extends VirtualBox {
	constructor(context, model, markup) {
		super(context, model);

		this.elementSelector = new ElementSelector(markup, 'body');
	}

	columnCount() {
		// TODO: add row index support
		const columns = this.model.view().columns;
		return columnService.lineView(columns).length;
	}

	getElements(pin) {
		return this.elementSelector.select(pin);
	}
}