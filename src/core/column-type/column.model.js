export default class ColumnModel {
	constructor(type = 'text') {
		this.type = type;
		this.key = null;
		this.title = null;
		this.value = null;
		this.pin = null;
		this.source = 'user';

		this.width = null;
		this.minWidth = 20;
		this.maxWidth = null;

		this.canEdit = true;
		this.canResize = true;
		this.canSort = true;
		this.canMove = true;

		this.isVisible = true;
	}

	toString() {
		return `${this.type}: ${this.title}`;
	}
}