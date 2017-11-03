import {Command} from '../command/command';

export declare class Composite {
	static func<T, A> (items: ((...args) => T)[], reducer?: (A, T) => A, memo?: A): (...args) => A;

	static command (...commands: Command[]): Command;
}