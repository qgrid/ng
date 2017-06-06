import {Resource} from '../resource';

export class RowModel {
	constructor() {
		this.mode = 'data';//data|details
		this.resource = new Resource();

		this.height = 0;
	}
}