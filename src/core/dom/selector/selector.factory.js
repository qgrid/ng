import {Selector} from './selector';
import {SelectorMediator} from './selector.mediate';
import * as columnService from '../../column/column.service';
import {identity, isUndefined} from '../../utility';
import {AppError} from '../../infrastructure';

export class SelectorFactory {
	constructor(bag, selectorMark) {
		this.bag = bag;
		this.selectorMark = selectorMark;
	}

	create() {
		const bag = this.bag;
		return new SelectorMediator(context => {
			const entries =
				this.selectorMark
					.select()
					.filter(entry => {
						if (context.hasOwnProperty('column')) {
							const columnIndex = context.column;
							return entry.columnRange.start <= columnIndex && columnIndex <= entry.columnRange.end;
						}

						return true;
					});

			return entries.map(entry => ({
				invoke: f => {
					const args = [];
					args.push(new Selector(entry.element, bag));
					if (context.hasOwnProperty('row')) {
						args.push(context.row - entry.rowRange.start);
					}
					if (context.hasOwnProperty('column')) {
						args.push(context.column - entry.columnRange.start);
					}

					return f(...args);
				}
			}));
		});
	}
}