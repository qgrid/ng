import {Command} from './command';

export declare class Shortcut {

	constructor(table: object, manager: object);

	manager: object;
	commands: Command[];
	shortcuts: object;
	codeMap: object;
   canExecute : object;
	off: object;


	translate(e: object): any[];

	onKeyDown(e: object): void;

	register(id: number, commands: object): any;

	find(code: string): any[];

	test(shortcut: object, code: string): any;

	onDestroy(): void;
}