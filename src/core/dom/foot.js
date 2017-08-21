import {Box} from './box';
import {ElementSelector} from './selector';

export class Foot extends Box {
	constructor(context, model, markup) {
		super(context, model);

		this.elementSelector = new ElementSelector(markup, 'foot');
	}

	getElementsCore(pin) {
		return this.elementSelector.select(pin);
	}
}