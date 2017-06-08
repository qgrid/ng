export declare const identityIndexMapper: Object;

class BucketEntryCore {

	constructor();

	map(): Array<any>;

	find(): null;

	add(): void;

	remove(): void;

	count(): Number;
}

class BucketEntry {

	constructor(entry: Object, mapper: Object);

	map(f: Object): Array<any>;

	find(column: String): any;

	add(item: Object, column: String): void;

	remove(item: Object, column: String): Boolean;

	count(): Number;
}

export declare const EMPTY: BucketEntryCore;

export declare class Bucket2d {

	constructor(indexMapper: Object);

	items: Array<any>;
	indexMapper: Object;
	empty: Object;


	add(item: Object, row: String, column: Object): void;

	remove(item, row: String, column: Object): void;

	find(row: Object, column: Object): any;

	count(): Number;

	map(f: Object): void;

	isEmpty(row: Object): Boolean;
}