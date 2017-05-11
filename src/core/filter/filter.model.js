import {Resource} from '../resource';
import {match} from './';
import {noop} from '../services/utility';

export class FilterModel {
	constructor() {
		this.resource = new Resource();
		this.by = {};
		this.match = match;
		this.fetch = noop;
	}
}