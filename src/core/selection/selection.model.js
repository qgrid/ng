import Resource from 'core/resource/resource';

export default class SelectionModel {
	constructor() {
		this.unit = 'row';//row|cell|column
		this.mode = 'single';//single|multiple|checkbox?
		this.items = [];
		this.resource = new Resource();
	}
}