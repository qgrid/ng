import EnumerableResource from '../resource/enumerable.resource';

export default class FootModel {
	constructor() {
		this.resource = new EnumerableResource();
		this.sticky = false;
	}
}