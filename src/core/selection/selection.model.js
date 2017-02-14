import Resource from 'core/resource/resource';

export default class SelectionModel {
	constructor() {
		this.resource = new Resource();
		this.unit = 'row';//row|cell|column
		this.mode = 'multiple';//single|multiple
		this.items = [];
	}
}