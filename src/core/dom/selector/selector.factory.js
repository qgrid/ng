import {Selector} from './selector';
import {SelectorMediator} from './selector.mediate';

export class SelectorFactory {
	constructor(bag, elementsSelector) {
		this.bag = bag;
		this.elementsSelector = elementsSelector;
	}

	create() {
		const bag = this.bag;
		return new SelectorMediator(context => {
			const elements = this.elementsSelector();
			return elements.map(element => new Selector(element, bag))
		});
	}
}