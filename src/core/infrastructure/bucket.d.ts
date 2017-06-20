export declare const EMPTY: object;

export declare class Bucket {

	constructor();

	items: any[];

	add(item: object, row: object): void;

	remove(item: object, row: object): void;

	find(row: object): object;

	count(): number;

	map(f: () => void) any;

	isEmpty(row: object): boolean;
}