import Resource from '../resource/resource';

export default class RowModel {
	constructor() {
		this.mode = 'data';//data|details
		this.resource = new Resource();
	}
}