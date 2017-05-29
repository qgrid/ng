export class RowBox {
	constructor() {
		this.items = [];
	}

	addClass(index, name) {
		const entry = this.items[index] || (this.items[index] = new Set());
		entry.set(name);
	}

	removeClass(index, name) {

	}
}