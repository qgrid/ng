export class CommandManager {
	constructor(apply = f => f()) {
		this.apply = apply;
	}

	invoke(commands) {
		// First we need to get list of executable commands, cause execution of prev command can
		// impact on canExecute of next command
		this.apply(() => {
			const priorityCommands = Array.from(commands);
			priorityCommands.sort((x, y) => y.priority - x.priority);

			for (const cmd of priorityCommands) {
				if (cmd.execute() === false) {
					break;
				}
			}
		});

		return commands.length > 0;
	}

	filter(commands) {
		return commands.filter(cmd => cmd.canExecute());
	}
}
