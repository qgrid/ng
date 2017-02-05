export default class ColumnModel {
	constructor(type = 'text') {
		this.type = type;
		this.key = null;
		this.title = null;
		this.value = null;
		this.isVisible = true;
		this.canEdit = true;
		this.pin = null;
	}
}