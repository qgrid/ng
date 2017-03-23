import Command from 'core/infrastructure/command';
import * as columnService from 'core/column/column.service';

export default class Navigation {
	constructor(model, table) {
		this.model = model;
		this.document = table.markup.document;
		this.markup = table.markup;
		this.table = table;
	}

	moveTo(y, direction) {
		const body = this.table.body;
		let index = 0;
		let offset = 0;
		while (offset <= y && body.row(index)) {
			offset += body.row(index).view.clientHeight;
			index++;
		}
		if (direction && body.row(index)) {
			offset -= body.row(index).view.clientHeight;
			index--;
		}
		return {
			row: index,
			offset: offset
		};
	}

	get commands() {
		const model = this.model;
		const commands = {
			goDown: new Command({
				shortcut: 'down',
				canExecute: () => (model.navigation().row < model.view().rows.length - 1) && model.edit().editMode == 'view',
				execute: () => {
					const navigationState = model.navigation();
					if (navigationState.row == -1 && navigationState.column == -1) {
						model.navigation({
							column: 0,
							row: 0
						});
					} else {
						model.navigation({row: navigationState.row + 1});
					}
				}
			}),
			goUp: new Command({
				shortcut: 'up',
				canExecute: () => (model.navigation().row > 0) && model.edit().editMode == 'view',
				execute: () => {
					model.navigation({row: model.navigation().row - 1});
				}
			}),
			goRight: new Command({
				shortcut: 'right',
				canExecute: () => (model.navigation().column < columnService.lineView(model.view().columns).length - 2) && model.edit().editMode == 'view',
				execute: () => {
					const navigationState = model.navigation();
					if (navigationState.row == -1 && navigationState.column == -1) {
						model.navigation({
							column: 0,
							row: 0
						});
					} else {
						model.navigation({column: navigationState.column + 1});
					}
				}
			}),
			tab: new Command({
				shortcut: 'tab',
				canExecute: () => model.edit().editMode == 'view',
				execute: () => {
					const navigationState = model.navigation();
					const isLastCell = navigationState.column === columnService.lineView(model.view().columns).length - 2;
					const isLastRow = navigationState.row === model.view().rows.length - 1;
					if (navigationState.row == -1 && navigationState.column == -1) {
						model.navigation({
							column: 0,
							row: 0
						});
					} else if (isLastCell && isLastRow) {
						this.markup.table.blur();
					} else if (isLastCell && !isLastRow) {
						model.navigation({
							column: 0,
							row: navigationState.row + 1
						});
					} else {
						model.navigation({column: navigationState.column + 1});
					}
				}
			}),
			goLeft: new Command({
				shortcut: 'left',
				canExecute: () => (model.navigation().column > 0) && model.edit().editMode == 'view',
				execute: () => {
					model.navigation({column: model.navigation().column - 1});
				}
			}),
			home: new Command({
				shortcut: 'home',
				canExecute: () => model.edit().editMode == 'view',
				execute: () => {
					const nav = {row: 0};
					if (model.navigation().column == -1) {
						nav.column = 0;
					}
					model.navigation(nav);
				}
			}),
			end: new Command({
				shortcut: 'end',
				canExecute: () => model.edit().editMode == 'view',
				execute: () => {
					const rows = model.view().rows;
					const nav = {row: rows.length - 1};
					if (model.navigation().column == -1) {
						nav.column = 0;
					}
					model.navigation(nav);
				}
			}),
			pageUp: new Command({
				shortcut: 'pageUp',
				canExecute: () => model.edit().editMode == 'view',
				execute: () => {
					const body = this.table.body;
					const {row: row, offset: offset} = this.moveTo(body.view.scrollTop - body.view.getBoundingClientRect().height, false);
					if (body.row(row).cells.length) {
						body.view.scrollTop = offset;
						model.navigation({row: row}, {source: 'navigation'});
					}
				}
			}),
			pageDown: new Command({
				shortcut: 'pageDown',
				canExecute: () => model.edit().editMode == 'view',
				execute: () => {
					const body = this.table.body;
					const lastRowIndex = body.view.rows.length - 1;
					let {row: row, offset: offset} = this.moveTo(body.view.scrollTop + body.view.getBoundingClientRect().height, true);
					if (row > lastRowIndex) {
						row = lastRowIndex;
					}
					if (body.row(row).cells.length) {
						body.view.scrollTop = offset;
						model.navigation({row: row}, {source: 'navigation'});
					}
				}
			})
		};
		return new Map(
			Object.entries(commands)
		);
	}
}