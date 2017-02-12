import Command from 'core/infrastructure/command';
import * as columnService from 'core/column/column.service';

export default class Navigation {
	constructor(model) {
		this.model = model;
	}

	get commands() {
		const model = this.model;
		const commands = {
			goDown: new Command({
				shortcut: 'down',
				canExecute: () => model.navigation().row < model.view().rows.length - 1,
				execute: () => {
					model.navigation({row: model.navigation().row + 1});
				}
			}),
			goUp: new Command({
				shortcut: 'up',
				canExecute: () => model.navigation().row > 0,
				execute: () => {
					model.navigation({row: model.navigation().row - 1});
				}
			}),
			goRight: new Command({
				shortcut: 'tab|right',
				canExecute: () => model.navigation().column < columnService.lineView(model.view().columns).length - 1,
				execute: () => {
					model.navigation({column: model.navigation().column + 1});
				}
			}),
			goLeft: new Command({
				shortcut: 'shift+tab|left',
				canExecute: () => model.navigation().column > 0,
				execute: () => {
					model.navigation({column: model.navigation().column - 1});
				}
			})
		};
		return new Map(
			Object.entries(commands)
		);
	}
}