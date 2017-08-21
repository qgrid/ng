import {Selector} from './selector';
import {SelectorMediator} from './selector.mediate';

export class SelectorFactory {
	constructor(model, bag, elementsSelector) {
		this.model = this.model;
		this.bag = bag;
		this.elementsSelector = elementsSelector;
	}

	create() {
		const bag = this.bag;
		const model = this.model;

		return new SelectorMediator(context => {
			// const columns = model.view().columns;
			// const columnLine = columnService.lineView(columns);
			// let pin;
			// if(context.hasOwnProperty('column')){
			// 	pin =  columnLine.length < context.column
			// }

			const elements = this.elementsSelector();
			return elements.map(element => new Selector(element, bag))
		});
	}
}