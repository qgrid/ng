import {Resource} from '@grid/core/resource';

export default class ColumnChooserModel {
	constructor() {
		this.resource = new Resource();
		this.canAggregate = false;
	}
}