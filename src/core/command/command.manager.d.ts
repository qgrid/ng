import {IFunc} from '../dom/view';
import {Command} from './command';

export declare class CommandManager {
	constructor(apply: IFunc);
	apply: IFunc;
	invoke(commands: Command[]): boolean;
	filter(commands: Command[]): Command[];
}