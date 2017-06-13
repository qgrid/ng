import {Command} from './command';
import {CommandManager} from 'view/services/command.manager';

export declare class Shortcut {

	constructor(table: object, manager: CommandManager);

	manager: CommandManager;
	commands: Command[];

	register(id: number, commands: object): any;

	find(code: string): any[];

	test(shortcut: object, code: string): any;

	onDestroy(): void;
}