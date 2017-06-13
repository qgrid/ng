export declare class Command {
   constructor(context: object);

   execute(): void;
	canExecute(): boolean;
	shortcut: string;
}