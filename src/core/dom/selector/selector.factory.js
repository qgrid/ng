import {Selector} from './selector';
import {SelectorMediator} from './selector.mediate';
import * as columnService from '../../column/column.service';
import {identity, isUndefined} from '../../utility';
import {AppError} from '../../infrastructure';

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
			return {
				selectors: elements.map(element => new Selector(element, bag)),
				mapper: {
					row: identity,
					column: isUndefined(pin)
						? identity
						: index => {
							switch (pin) {
								case 'left':
									return index;
								case 'right':
									return index - columnLine.filter(c => c.model.pin !== 'right').length;
								case null:
									return index - columnLine.filter(c => c.model.pin === 'left').length;
								default:
									throw new AppError('selector.factory', `Invalid pin value "${pin}"`);
							}
						}
				}
			};
		});
	}
}