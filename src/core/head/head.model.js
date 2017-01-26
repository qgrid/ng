import Resource from '../resource/resource';

export default class HeadModel {
	constructor() {
		this.resource = new Resource();
		this.sticky = true;
	}
}