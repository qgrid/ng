import Resource from 'core/resource/resource';

export default class SelectionModel {
	constructor() {
		this.resource = new Resource();
		this.unit = 'cell';//row|cell|column|mix
		this.mode = 'single';//single|multiple|range
		this.items = [];
	}
}