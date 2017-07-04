import {isFunction} from '../utility';

export class CommandManager {
	constructor(apply = f => f()) {
		this.apply = apply;
	}

	keyDown() {
	}

	canExecute() {
		return true;
	}

	execute(commands) {
		// First we need to get list of executable commands, cause execution of prev command can
		// impact on canExecute of next command
		const executableCommands = this.filter(commands);
		this.apply(() => executableCommands.forEach(cmd => cmd.execute()));
		return executableCommands.length > 0;
	}


	filter(commands) {
		const executableCommands = commands.filter(cmd => cmd.canExecute());
		const shortcut = CommandManager.shortcut;
		const explicitCommands = executableCommands.filter(cmd => shortcut(cmd) !== '*');
		if (explicitCommands.length) {
			return explicitCommands;
		}

		const wildcardCommands = executableCommands.filter(cmd => shortcut(cmd) === '*');
		return wildcardCommands;
	}

	static shortcut(command) {
		const shrct = command.shortcut;
		if (isFunction(shrct)) {
			return shrct();
		}

		return shrct;
	}
}