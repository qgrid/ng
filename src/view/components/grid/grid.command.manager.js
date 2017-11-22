import {TableCommandManager} from '@grid/core/command/table.command.manager';

const softCommands = new Set(['navigation']);

export class GridCommandManager extends TableCommandManager {
	constructor(apply, softApply, table) {
		super(apply, table);

		this.softApply = softApply;
	}

	invoke(commands, source) {
		if (commands.length === 1) {
			const cmd = commands[0];
			if (softCommands.has(cmd.source)) {
				this.softApply(() => cmd.execute());
				return true;
			}
		}

		return super.invoke(commands, source);
	}
}