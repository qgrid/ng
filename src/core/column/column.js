export default class Column {
	constructor() {
		this.type = 'text';
		this.key = null;
		this.title = null;
		this.value = null;
		this.isDefault = true;
		this.isVisible = true;
		this.aggregation = null;
		this.resource = {};
		this.pin = false;
	}
}