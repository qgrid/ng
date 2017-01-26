import Resource from '../resource/resource';

export default class FootModel {
	constructor() {
		this.resource = new Resource();
		this.sticky = true;
		this.count = 0;
	}
}