export declare const EMPTY: Object;

export declare class Bucket {

	constructor();

	items: Array<any>;

	add(item: Object, row: Object): void;

	remove(item: Object, row: Object): void;

	find(row: Object): Object;

	count(): Number;

	map(f: Object) void;

	isEmpty(row: Object): Boolean;
}