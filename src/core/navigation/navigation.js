import Command from '../infrastructure/command';

export default class Navigation {
	constructor(model) {
		this.model = model;
	}

	get commands() {
		const model = this.model,
			commands = {
				goDown: new Command({
					shortcut: 'tab|down',
					canExecute: () => model().row < model().rowCount,
					execute: () => {
						model({row: model().row + 1});
					}
				}),
				goUp: new Command({
					shortcut: 'shift+tab|up',
				}),
				expand: new Command({
					shortcut: 'right',
				}),
				collapse: new Command({
					shortcut: 'left',
				}),
				submit: new Command({
					shortcut: 'enter',
				}),
				find: new Command({
					shortcut: 'ctrl+f',
				})
			};
		return new Map(
			Object.entries(commands)
		);
	}
}