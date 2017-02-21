import Resource from '../resource/resource';
import match from './match';

export default class FilterModel {
	constructor() {
		this.resource = new Resource();
		this.by = {};
		this.match = match;
	}
}