import Resource from '../resource/resource';

export default class PagerModel {
	constructor() {
		this.resource = new Resource();

		this.pageSize = 50;
		this.pageSizeList = [5, 10, 20, 30, 50];
	}
}