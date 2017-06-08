/*eslint-disable  no-console*/

export declare class Log {
	constructor();

	static info(source: String, message: String): void;

	static warn(source: String, message: String): void;

	static error(source: String, message: String): void;
}

/*eslint-enable*/