import EnumerableResource from '../resource/resource.enumerable';

export default class FootModel {
	constructor() {
		this.resource = new EnumerableResource();
		this.sticky = false;
	}
}