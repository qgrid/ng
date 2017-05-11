import Resource from '@grid/core/resource/resource';
import Cache from '@grid/core/infrastructure/cache';

export default class BodyModel {
	constructor() {
		this.resource = new Resource();
		this.cache = new Cache();
	}
}