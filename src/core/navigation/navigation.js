import Command from 'core/infrastructure/command';
import * as columnService from 'core/column/column.service';

export default class Navigation {
	constructor(model, markup) {
		this.model = model;
		this.document = markup.document;
		this.markup = markup;
	}

	gridIsActive(){
		const active = this.document.activeElement;
		return active && active.tBodies && active.tBodies[0] === this.markup.body;
	}

	get commands() {
		const model = this.model;
		const commands = {
			goDown: new Command({
				shortcut: 'down',
				canExecute: () => this.gridIsActive()
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
				canExecute: () => this.gridIsActive()
				&& (model.navigation().row > 0)
				&& model.edit().editMode == 'view',
				execute: () => {
					model.navigation({row: model.navigation().row - 1});
				}
			}),
			goRight: new Command({
				shortcut: 'right',
				canExecute: () => this.gridIsActive()
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
				canExecute: () => this.gridIsActive()
				&& (model.navigation().column > 0)
				&& model.edit().editMode == 'view',
				execute: () => {
					model.navigation({column: model.navigation().column - 1});
				}
			}),
			focusFirstCellColumn: new Command({
				shortcut: 'home',
				canExecute: () => this.gridIsActive()
				&& (model.navigation().column > 0
				|| model.navigation().column == -1)
				&& model.edit().editMode == 'view',
				execute: () => {
					model.navigation({column: 0});
				}
			}),
			focusLastCellColumn: new Command({
				shortcut: 'end',
				canExecute: () => this.gridIsActive()
				&& (model.navigation().column < columnService.lineView(model.view().columns).length - 1
				|| model.navigation().column >= -1)
				&& model.edit().editMode == 'view',
				execute: () => {
					const index = columnService.lineView(model.view().columns).length - 1;
					model.navigation({column: index - 1});
				}
			}),
			focusFirstCellRow: new Command({
				shortcut: 'pageUp',
				canExecute: () => this.gridIsActive()
				&& model.edit().editMode == 'view',
				execute: () => {
					const nav = {row: 0};
					if (model.navigation().column == -1) {
						nav.column = 0;
					}
					model.navigation(nav);
				}
			}),
			focusLastCellRow: new Command({
				shortcut: 'pageDown',
				canExecute: () => this.gridIsActive()
				&& model.edit().editMode == 'view',
				execute: () => {
					const rows = model.view().rows;
					const nav = {row: rows.length - 1};
					if (model.navigation().column == -1) {
						nav.column = 0;
					}
					model.navigation(nav);
				}
			})
		};
		return new Map(
			Object.entries(commands)
		);
	}
}