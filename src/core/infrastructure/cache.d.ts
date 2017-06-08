export declare class Cache <K, V> {
	constructor();

	set(key: K, value: V);

	get(key: K): any ;

	has(key: K): boolean;

	find(key: K): any;

	remove(key: K): void;

	clear(): void;
}