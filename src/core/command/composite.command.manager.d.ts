import {CommandManager} from './command.manager';
import {Command} from './command';

export declare class CompositeCommandManager {
	constructor(manager: CommandManager);
	manager: CommandManager;
	filter(commands: Command[]): Command[];
	invoke(commands: Command[]): boolean;
}