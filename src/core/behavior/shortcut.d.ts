import {Command} from './command';
import {CommandManager} from './command.manager';

export declare class Shortcut {
	constructor(manager: CommandManager);

	register(id: string, commands: Command[]);
}