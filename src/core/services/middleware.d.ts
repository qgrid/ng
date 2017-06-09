export declare class Middleware {

	constructor();

	run(context: object, memo: any[]): any;
}

export declare function start(pipes: object, memo: object): Promise<any>;
