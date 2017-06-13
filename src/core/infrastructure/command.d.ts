interface IContext{
	execute(param: object): boolean;
	canExecute(param: object): boolean;
	shortcut: string;
}

export declare class Command {
   constructor(context: IContext);
}