export default class ColumnModel {
	constructor(type = 'text') {
		this.type = type;
		this.key = null;
		this.title = null;
		this.value = null;
		this.pin = null;
		this.width = null;
		this.source = 'user';

		this.canEdit = true;
		this.canResize = true;
		this.canSort = true;

		this.isVisible = true;
	}
}