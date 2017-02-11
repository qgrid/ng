import View from 'core/view/view';
import AppError from 'core/infrastructure/error';
import Command from 'core/infrastructure/command';
import * as columnService from 'core/column/column.service';
import * as sortService from 'core/sort/sort.service';

export default class SortView extends View {
	constructor(model) {
		super(model);

		this.toggle = new Command({
			canExecute: key => {
				const map = columnService.map(model.data().columns);
				return map.hasOwnProperty(key) && map[key].canSort !== false;
			},
			execute: key => {
				const sort = model.sort;
				const sortState = sort();
				const by = Array.from(sortState.by);
				const index = sortService.index(by, key);
				if (index >= 0) {
					const dir = sortService.direction(by[index]);
					switch (dir) {
						case 'desc': {
							by.splice(index, 1);
							break;
						}
						case 'asc': {
							const entry = {[key]: 'desc'};
							by.splice(index, 1);
							by.splice(index, 0, entry);
							break;
						}
						default:
							throw AppError(
								'head.core',
								`Invalid sort direction ${dir}`);
					}
				}
				else {
					if (sortState.mode === 'single') {
						by.length = 0;
					}

					const entry = {[key]: 'asc'};
					by.push(entry);
				}

				sort({by: by});
			}
		});
	}

	direction(key) {
		const state = this.model.sort();
		const by = state.by;
		return sortService.map(by)[key];
	}

	order(key) {
		const state = this.model.sort();
		const by = state.by;
		return sortService.index(by, key);
	}
}