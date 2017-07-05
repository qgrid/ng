import {flatten, isFunction} from '../utility';
import {Command} from './command';

export class ShortcutManager {
	constructor() {
		this.managerMap = new Map();
		this.keyCode = '';
	}

	register(manager, commands) {
		const cmds = commands.values ? commands.values() : commands;
		let context = this.managerMap.get(manager);
		if (!context) {
			context = {
				commands: [],
				shortcuts: new Map()
			};

			this.managerMap.set(manager, context);
		}

		for (let cmd of cmds) {
			if (cmd.shortcut) {
				if (isFunction(cmd.shortcut)) {
					context.commands.push(cmd);
				}
				else {
					cmd.shortcut
						.toLowerCase()
						.split('|')
						.forEach(shortcut => {
							let temp = [];
							if (context.shortcuts.has(shortcut)) {
								temp = context.shortcuts.get(shortcut);
							}
							temp.push(cmd);
							context.shortcuts.set(shortcut, temp);
						});
				}
			}
		}

		return () => {
			for (let command of commands) {
				if (isFunction(command.shortcut)) {
					const index = context.commands.indexOf(command);
					if (index >= 0) {
						context.commands.splice(index, 1);
					}
				}
				else {
					delete context.shortcuts[command.shortcut];
				}
			}

			if (context.commands.length === 0 && Object.keys(context.shortcuts).length === 0) {
				this.managerMap.delete(manager);
			}
		};
	}

	execute(code) {
		const notWildcard = (cmd) => {
			this.keyCode = '';
			return cmd.shortcut !== '*';
		};
		const isWildcard = () => {
			this.keyCode = code;
			return true;
		};
		const find = this.findFactory(code);
		const xs = Array.from(this.managerMap.entries())
			.map(entry => ({
				commands: entry[0].filter(find(entry[1])),
				manager: entry[0]
			}))
			.filter(x => x.commands.length);

		const allCommands = flatten(xs.map(x => x.commands));
		const filter = allCommands.filter(notWildcard).length > 0 ? notWildcard : isWildcard;
		return xs.reduce((memo, x) => {
			memo |= x.manager.invoke(x.commands.filter(filter));
			return memo;
		}, false);
	}

	findFactory(code) {
		return context => {
			let result = [];
			if (context.shortcuts.has(code)) {
				result = result.concat(context.shortcuts.get(code));
			}

			result = result.concat(context.commands
				.map(cmd => new Command({execute: cmd.execute, canExecute: cmd.canExecute, shortcut: cmd.shortcut()}))
				.filter(cmd => this.test(cmd.shortcut, code)));

			return result;
		};
	}

	test(shortcut, code) {
		return ('' + shortcut)
			.toLowerCase()
			.split('|')
			.some(shct => shct === '*' || code === shct);
	}
}
