import Resource from '../resource/resource';

export default class FootModel {
	constructor() {
		this.resource = new Resource();
		this.sticky = false;
		this.count = 0;
	}
}