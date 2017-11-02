import {Command} from './command';

export declare class Composite {
	static function<T, A> (items: ((...args) => T)[], reducer?: (A, T) => A, memo?: A): (...args) => A;

	static command (...commands: Command[]): Command;
}