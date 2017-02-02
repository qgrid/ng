import Resource from '../resource/resource';
import {noop} from '../services/utility';

export default class FilterModel {
	constructor() {
		this.resource = new Resource();
		this.by = {};
		this.match = () => noop;
	}
}