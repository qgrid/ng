interface IReturnFunc{
	(entry: object, value: any): string;
}

export declare function compile(path: string): IReturnFunc;

