import {Command} from './command';
import {CommandManager} from './command.manager';
import {INoopResult} from "../utility/utility";

export declare class Shortcut {

	constructor(public manager: CommandManager);
	register(commands: Command[]): INoopResult;
}