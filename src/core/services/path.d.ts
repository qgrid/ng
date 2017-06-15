export declare interface ICompileResult{
	(entry: object, value: any): any;
}

export declare function compile(path: string): ICompileResult;

