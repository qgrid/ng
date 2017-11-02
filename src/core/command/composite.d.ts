import {Command} from './command';

export declare class Composite {
	static function<T, A> (items: T[], reducer?: (A, T) => A, memo?: A): A;

	static command (...commands: Command[]): Command;
}