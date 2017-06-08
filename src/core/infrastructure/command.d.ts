export declare class Command {
   constructor();

   execute(): void;
	canExecute(): boolean;
	shortcut: String;
}