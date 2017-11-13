export declare const resolvers: object;

export declare class RulePath {
	constructor();

	static register(name: string, resolve: any): RulePath;

	static get(source: object): string;

	static find(source: object): string;

	static name(name: string): string;

	static readonly require: string;
}
