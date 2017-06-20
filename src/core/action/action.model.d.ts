import {Action} from '../infrastructure/action';

declare class ActionModel{
	constructor();

	private items: Array<Action>;
}