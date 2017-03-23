import Resource from '../resource/resource';
import {noop} from '../services/utility';

export default class SortModel {
	constructor() {
		this.resource = new Resource();
		this.row = noop;
	}
}