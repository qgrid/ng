import {Command} from '../command/command';

export declare class PersistenceModel {
	id: string;
	load: Command;
	remove: Command;
	settings: object;
}
