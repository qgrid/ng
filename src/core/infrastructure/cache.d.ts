export declare class Cache {
	constructor();

	set(key: String, value: any);

	get(key: String): any ;

	has(key: String): boolean;

	find(key: String): any;

	remove(key: String): void;

	clear(): void;
}