import {Selector} from './selector';
import {SelectorMediator} from './selector.mediate';
import * as columnService from '../../column/column.service';

export class SelectorFactory {
	constructor(model, bag, elementsSelector) {
		this.model = model;
		this.bag = bag;
		this.elementsSelector = elementsSelector;
	}

	create() {
		const bag = this.bag;
		const model = this.model;

		return new SelectorMediator(context => {
			const columns = model.view().columns;
			const columnLine = columnService.lineView(columns);
			let pin;
			if (context.hasOwnProperty('column')) {
				const column = columnLine[context.column];
				if (column) {
					pin = column.model.pin;
				}
			}

			const elements = this.elementsSelector(pin);
			return elements.map(element => new Selector(element, bag));
		});
	}
}