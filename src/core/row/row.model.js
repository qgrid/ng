import {Resource} from '../resource';

export class RowModel {
	constructor() {
		this.resource = new Resource();

		this.mode = 'data';//data|details
		this.height = 0;
		this.status = new Map();
	}
}