import Resource from 'core/resource/resource';

export default class SelectionModel {
	constructor() {
		this.mode = 'row';
		this.items = [];
		this.resource = new Resource();
	}
}