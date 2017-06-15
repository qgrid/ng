export declare interface INoopResult{
	(): void;
}
export declare interface IYesResult{
	(): boolean;
}

export declare interface INoResult{
	(): boolean;
}

export declare interface IIdentityResult{
	(any): any;
}

export declare interface IToCamelCaseResult{
	(...names: string[]): string;
}

export declare interface IIsEmailResult{
	(value: string): boolean;
}

export declare const noop: INoopResult;

export declare const yes: IYesResult;

export declare const no: INoResult;

export declare const identity: IIdentityResult;

export declare const toCamelCase: IToCamelCaseResult;

export declare const isEmail: IIsEmailResult;
