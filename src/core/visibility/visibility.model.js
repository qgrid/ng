import Resource from '../resource/resource';

export default class VisibilityModel {
	constructor() {
		this.resource = new Resource();
		this.head = true;
		this.foot = true;
		this.body = true;
		this.toolbar = {
			top: true,
			bottom: true,
			right: false,
			left: false
		};
	}
}