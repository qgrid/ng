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

	moveTo(y, direction) {
		const body = this.markup.body;
		const rows = body.rows;
		let index = 0;
		let offset = 0;
		while (offset <= y && rows[index]) {
			offset += rows[index].clientHeight;
			index++;
		}
		if (direction && rows[index]) {
			offset -= rows[index].clientHeight;
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
			home: new Command({
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
			end: new Command({
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
			pageUp: new Command({
				shortcut: 'pageUp',
				canExecute: () => this.isActive()
				&& model.edit().editMode == 'view',
				execute: () => {
					const body = this.markup.body;
					const {row: row, offset: offset} = this.moveTo(body.scrollTop - body.getBoundingClientRect().height, false);
					if (body.rows[row]) {
						body.scrollTop = offset;
						model.navigation({row: row}, {source: 'navigation'});
					}
				}
			}),
			pageDown: new Command({
				shortcut: 'pageDown',
				canExecute: () => this.isActive()
				&& model.edit().editMode == 'view',
				execute: () => {
					const body = this.markup.body;
					const {row: row, offset: offset} = this.moveTo(body.scrollTop + body.getBoundingClientRect().height, true);
					if (body.rows[row]) {
						body.scrollTop = offset;
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