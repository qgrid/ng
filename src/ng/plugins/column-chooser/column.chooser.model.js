import Resource from 'core/resource/resource';

export default class ColumnChooserModel {
	constructor() {
		this.resource = new Resource();
		this.canAggregate = false;
	}
}