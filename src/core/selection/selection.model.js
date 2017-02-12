import Resource from 'core/resource/resource';

export default class SelectionModel {
	constructor() {
		this.unit = 'row';//checkbox|row|cell|column
		this.mode = 'single';//single|multiple
		this.items = [];
		this.resource = new Resource();
	}
}