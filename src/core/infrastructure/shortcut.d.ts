export declare class Shortcut {

	constructor(table: Object, manager: Object);

	manager: Object;
	commands: Array<any>;
	shortcuts: Object;
	codeMap: Object;
   canExecute : Object;
	off: Object;


	translate(e: Object): Array<any>;

	onKeyDown(e: Object): void;

	register(id: Number, commands: Object): any;

	find(code: String): Array<any>;

	test(shortcut: Object, code: String): any;

	onDestroy(): void;
}