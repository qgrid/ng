import EnumerableResource from '../resource/resource.enumerable';
import Cache from '@grid/core/infrastructure/cache';

export default class FootModel {
	constructor() {
		this.resource = new EnumerableResource();
		this.cache = new Cache();
	}
}