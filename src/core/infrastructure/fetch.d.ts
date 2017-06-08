export declare class Fetch {
	constructor(select: Object);

	select: Object;
	busy: null;
	result: null;

	run(item: Object): any;
}