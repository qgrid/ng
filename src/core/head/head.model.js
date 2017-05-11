import Resource from '../resource/resource';
import Cache from '@grid/core/infrastructure/cache';

export default class HeadModel {
	constructor() {
		this.resource = new Resource();
		this.cache = new Cache();
	}
}