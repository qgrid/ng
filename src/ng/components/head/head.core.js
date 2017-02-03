import Directive from '../directive';
import Command from 'core/infrastructure/command';
import AppError from 'core/infrastructure/error';
import {noop} from 'core/services/utility';
import * as sortService from 'core/sort/sort.service';
import * as columnService from 'core/column/column.service';
import {VIEW_CORE_NAME, HEAD_CORE_NAME, TH_CORE_NAME} from 'src/definition';

class HeadCore extends Directive(HEAD_CORE_NAME, {view: `^^${VIEW_CORE_NAME}`}) {
	constructor($scope) {
		super();

		this.$scope = $scope;
		Object.defineProperty($scope, '$view', {get: () => this.view});

		this.drop = new Command({
			canExecute: e => {
				if (e.source.key === TH_CORE_NAME) {
					const map = columnService.map(this.view.model.data().columns);
					return map.hasOwnProperty(e.target.value);
				}

				return false;
			},
			execute: e => {
				const view = this.view.model.view;
				const columnRows = view().columns;
				for (let columns of columnRows) {
					const targetIndex = columns.findIndex(c => c.model.key === e.target.value);
					const sourceIndex = columns.findIndex(c => c.model.key === e.source.value);
					if (targetIndex >= 0 && sourceIndex >= 0) {
						// TODO: full copy? impacting pef. on pivoting?
						const sourceColumn = columns[sourceIndex];
						columns.splice(sourceIndex, 1);
						columns.splice(targetIndex, 0, sourceColumn);
						view({columns: Array.from(columnRows)});
					}
				}
			}
		});

		this.drag = new Command({
			canExecute: e => {
				if (e.source.key === TH_CORE_NAME) {
					const map = columnService.map(this.view.model.data().columns);
					return map.hasOwnProperty(e.source.value);
				}

				return false;
			},
			execute: noop
		});

		this.sortToggle = new Command({
			execute: key => {
				const sort = this.view.model.sort;
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