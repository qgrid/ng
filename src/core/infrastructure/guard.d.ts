export declare class Guard {

	static notUndefined(value: any, name: String): void;

	static notNull(value: any, name: String): void;

	static notNullOrEmpty(value: any, name: String): void;

	static invokable(value: any, name: String): void;
}