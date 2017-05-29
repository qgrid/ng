export class RowBox {
	constructor(box) {
		this.box = box;
		this.items = {};
	}

	addClass(index, name) {
		const entry = this.items[index] || (this.items[index] = new Set());
		entry.add(name);
	}

	removeClass(index, name) {
		const entry = this.items[index];
		if (entry) {
			entry.delete(name);
			if (!Object.keys(entry).length) {
				delete this.items[index];
			}
		}
	}

	invalidate() {
		const items = this.items;
		const rows = this.box.rows();
		for (let i = 0, length = rows.length; i < length; i++) {
			const row = rows[i];
			row.clearClassList();

			const model = row.model;
			if (model) {
				const entry = items[model.index];
				if (entry) {
					for (let cls in entry.values()) {
						row.addClassCore(cls);
					}
				}
			}
		}
	}
}