import Resource from '../entity/resource';

export default class HeadModel {
	constructor() {
		this.resource = new Resource();
		this.sticky = true;
	}
}