interface INoopResult{
	(): void;
}
interface IYesResult{
	(): boolean;
}

interface INoResult{
	(): boolean;
}

interface IIdentityResult{
	(any): any;
}

interface IToCamelCaseResult{
	(...names: string[]): string;
}

interface IIsEmailResult{
	(value: string): boolean;
}

export declare const noop: INoopResult;

export declare const yes: IYesResult;

export declare const no: INoResult;

export declare const identity: IIdentityResult;

export declare const toCamelCase: IToCamelCaseResult;

export declare const isEmail: IIsEmailResult;
