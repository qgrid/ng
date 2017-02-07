import Resource from '../resource/resource';
import {yes} from '../services/utility';

export default class FilterModel {
	constructor() {
		this.resource = new Resource();
		this.by = {};
		this.match = () => yes;
	}
}