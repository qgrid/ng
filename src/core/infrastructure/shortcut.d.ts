import {Command} from './command';
import {CommandManager} from 'view/services/command.manager';

export declare class Shortcut {

	constructor(table: object, manager: CommandManager);

	manager: CommandManager;
	commands: Command[];

}