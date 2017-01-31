import Directive from '../directive';
import Command from 'core/infrastructure/command';
import AppError from 'core/infrastructure/error';
import * as sortService from 'core/sort/sort.service';
import {VIEW_CORE_NAME, HEAD_CORE_NAME, TH_CORE_NAME} from 'src/definition';

class HeadCore extends Directive(HEAD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope) {
		super();

		this.$scope = $scope;
		this.drop = new Command({
			canExecute: e => e.source.key === TH_CORE_NAME,
			execute: e => {
				const view = this.view.model.view;
				const columns = view().columns;
				const targetIndex = columns.findIndex(c => c.key === e.target.value);
				const sourceIndex = columns.findIndex(c => c.key === e.source.value);
				if (targetIndex >= 0 && sourceIndex >= 0) {
					const newColumns = Array.from(columns);
					newColumns.splice(sourceIndex, 1);
					newColumns.splice(targetIndex, 0, columns[sourceIndex]);
					view({columns: newColumns});
				}
			}
		});

		this.sortToggle = new Command({
			execute: key => {
				const sort = this.view.model.sort;
				const by = Array.from(sort().by);
				const index = sortService.index(by, key);
				if (index >= 0) {
					const dir = sortService.direction(by[index]);
					switch (dir) {
						case 'desc': {
							by.splice(index, 1);
							break;
						}
						case 'asc': {
							const entry = {};
							entry[key] = 'desc';

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
					const entry = {};
					entry[key] = 'asc';
					by.push(entry);
				}

				sort({by: by});
			}
		});
	}

	onInit() {
	}

	sortDirection(key) {
		const state = this.view.model.sort();
		const by = state.by;
		return sortService.map(by)[key];
	}

	sortOrder(key) {
		const state = this.view.model.sort();
		const by = state.by;
		return sortService.index(by, key);
	}

	transfer(cell) {
		return {
			key: TH_CORE_NAME,
			value: cell.column.key
		}
	}
}

HeadCore.$inject = ['$scope'];

export default {
	restrict: 'A',
	bindToController: true,
	controllerAs: '$head',
	controller: HeadCore,
	require: HeadCore.require,
	link: HeadCore.link,
	scope: true
};