import Command from 'core/infrastructure/command';
import * as columnService from 'core/column/column.service';

export default class Navigation {
	constructor(model, markup) {
		this.model = model;
		this.document = markup.document;
		this.markup = markup;
	}

	isActive() {
		const active = this.document.activeElement;
		return active && active.tBodies && active.tBodies[0] === this.markup.body;
	}

	rowIndex(y) {
		const body = this.markup.body;
		const rows = body.rows;
		let offset = 0;
		let index = 0;
		while (offset <= y) {
			offset += rows[index].clientHeight;
			index++;
		}

		return index - 1;
		//
		// const container = body.getBoundingClientRect();
		// const {row: row, column: column} = this.model.navigation();
		// const current = rows[row].offsetHeight;
		// for (let i = row; i < rows.length - 1; i++) {
		// 	const target = rows[i].cells[column].getBoundingClientRect();
		// 	console.log(container, current, target, body.scrollTop);
		// 	// const diff = target.bottom - container.bottom;
		// 	// if (target.top <= diff && target.bottom >= diff) {
		// 	// 	return i;
		// 	// }
		// }
	}

	get commands() {
		const model = this.model;
		const commands = {
			goDown: new Command({
				shortcut: 'down',
				canExecute: () => this.isActive()
				&& (model.navigation().row < model.view().rows.length - 1)
				&& model.edit().editMode == 'view',
				execute: () => {
					if (model.navigation().row == -1 && model.navigation().column == -1) {
						model.navigation({
							column: 0,
							row: 0
						});
					} else {
						model.navigation({row: model.navigation().row + 1});
					}
				}
			}),
			goUp: new Command({
				shortcut: 'up',
				canExecute: () => this.isActive()
				&& (model.navigation().row > 0)
				&& model.edit().editMode == 'view',
				execute: () => {
					model.navigation({row: model.navigation().row - 1});
				}
			}),
			goRight: new Command({
				shortcut: 'right',
				canExecute: () => this.isActive()
				&& (model.navigation().column < columnService.lineView(model.view().columns).length - 2)
				&& model.edit().editMode == 'view',
				execute: () => {
					if (model.navigation().row == -1 && model.navigation().column == -1) {
						model.navigation({
							column: 0,
							row: 0
						});
					} else {
						model.navigation({column: model.navigation().column + 1});
					}
				}
			}),
			goLeft: new Command({
				shortcut: 'left',
				canExecute: () => this.isActive()
				&& (model.navigation().column > 0)
				&& model.edit().editMode == 'view',
				execute: () => {
					model.navigation({column: model.navigation().column - 1});
				}
			}),
			focusFirstRowTable: new Command({
				shortcut: 'home',
				canExecute: () => this.isActive()
				&& model.edit().editMode == 'view',
				execute: () => {
					const nav = {row: 0};
					if (model.navigation().column == -1) {
						nav.column = 0;
					}
					model.navigation(nav);
				}
			}),
			focusLastRowTable: new Command({
				shortcut: 'end',
				canExecute: () => this.isActive()
				&& model.edit().editMode == 'view',
				execute: () => {
					const rows = model.view().rows;
					const nav = {row: rows.length - 1};
					if (model.navigation().column == -1) {
						nav.column = 0;
					}
					model.navigation(nav);
				}
			}),
			focusFirstRowPage: new Command({
				shortcut: 'pageUp',
				canExecute: () => this.isActive()
				&& model.edit().editMode == 'view',
				execute: () => {
					const body = this.markup.body;
					body.scrollTop -= body.getBoundingClientRect().height;
				}
			}),
			focusLastRowPage: new Command({
				shortcut: 'pageDown',
				canExecute: () => this.isActive()
				&& model.edit().editMode == 'view',
				execute: () => {
					const body = this.markup.body;
					body.scrollTop += body.getBoundingClientRect().height;
					model.navigation({row: this.rowIndex(body.scrollTop)}, {source: 'navigation'});
				}
			})
		};
		return new Map(
			Object.entries(commands)
		);
	}

}