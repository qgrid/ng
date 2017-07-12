import {Resource} from '../resource';
import {identity} from '../utility';
import {Command} from '../command';

export class SelectionModel {
	constructor() {
		this.resource = new Resource();
		this.unit = 'cell';//row|cell|column|mix
		this.mode = 'single';//single|multiple|range
		this.items = [];
		this.area = 'body'; //body, custom
		this.toggle = new Command();
		this.select = new Command();
		this.key = {
			row: identity,
			column: identity
		};
	}
}