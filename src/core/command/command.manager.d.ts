import {Command} from './command';

export declare class CommandManager {
	constructor();

	invoke(commands: Command[]): boolean;

	filter(commands: Command[], source?: string): Command[];
}
