export declare const identityIndexMapper: object;


class BucketEntryCore {

	constructor();

	map(): any[];

	find(): null;

	add(): void;

	remove(): void;

	count(): number;
}

class BucketEntry {

	constructor(entry: object, mapper: object);

	entry: object;
	mapper: object;

	map(f: () => any): any[];

	find(column: string): any;

	add(item: object, column: string): void;

	remove(item: object, column: string): boolean;

	count(): number;
}

export declare const EMPTY: BucketEntryCore;

export declare class Bucket2d {

	constructor(indexMapper: object);

	items: any[];
	indexMapper: object;
	empty: object;


	add(item: object, row: object, column: object): void;

	remove(item: object, row: object, column: object): void;

	find(row: object, column: object): any;

	count(): number;

	map(f: () => any): void;

	isEmpty(row: object): boolean;
}