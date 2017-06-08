export declare class Fetch {
	constructor(select: Object);

	select: Object;
	busy: Boolean;
	result: Boolean;

	run(item: Object): any;
}