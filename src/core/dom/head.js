import {Box} from './box';
import {ElementSelector} from './selector';

export class Head extends Box {
	constructor(context, model, markup) {
		super(context, model);

		this.elementSelector = new ElementSelector(markup, 'body');
	}

	getElements(pin) {
		return this.elementSelector.select(pin);
	}
}