import {AppError} from './error';

export declare class Cache {
	constructor();

	set(key: String, value: Object);

	get(key: String) ;


	has(key: Object);

	find(key: Object);

	remove(key: Object);

	clear();
}