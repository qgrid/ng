import Resource from '../resource/resource';

export default class PaginationModel {
	constructor() {
		this.resource = new Resource();

		this.size = 50;
		this.sizeList = [5, 10, 20, 30, 50];
	}
}