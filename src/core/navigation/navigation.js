import Command from 'core/infrastructure/command';

export default class Navigation {
	constructor(model) {
		this.model = model;
	}

	get commands() {
		const model = this.model;
		const commands = {
			goDown: new Command({
				shortcut: 'down',
				canExecute: () => model().row < model().rowCount,
				execute: () => {
					model({row: model().row + 1});
				}
			}),
			goUp: new Command({
				shortcut: 'up',
				canExecute: () => model().row > 0,
				execute: () => {
					model({row: model().row - 1});
				}
			}),
			goRight: new Command({
				shortcut: 'tab|right',
				canExecute: () => model().column < model().columnCount,
				execute: () => {
					model({column: model().column + 1});
				}
			}),
			goLeft: new Command({
				shortcut: 'shift+tab|left',
				canExecute: () => model().column > 0,
				execute: () => {
					model({column: model().column - 1});
				}
			})
		};
		return new Map(
			Object.entries(commands)
		);
	}
}