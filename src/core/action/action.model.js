import {Resource} from '../resource';
import {Shortcut, ShortcutDispatcher} from '../shortcut';

export class ActionModel {
	constructor() {
		this.resource = new Resource();
		this.items = [];
		this.shortcut = new Shortcut(new ShortcutDispatcher());
	}
}