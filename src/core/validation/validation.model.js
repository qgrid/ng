import {Resource} from '../resource';
import {yes} from '../utility/index';

export class ValidationModel {
	constructor() {
		this.resource = new Resource();
		this.rules = [];
		canExecute = yes;
	}
}
