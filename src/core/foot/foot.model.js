import Resource from '../entity/resource';

export default class FootModel {
	constructor() {
		this.resource = new Resource();
		this.sticky = true;
		this.count = 0;
	}
}