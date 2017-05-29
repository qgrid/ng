export class RowBox {
	constructor(box) {
		this.box = box;
		this.view = new Map();
		this.data = new Map();
	}

	addClass(row, name) {
		const model = row.model;
		if (model) {
			const viewIndex = row.index;
			let viewEntry = this.view.get(viewIndex);
			if (!viewEntry) {
				viewEntry = new Set();
				this.view.set(viewIndex, viewEntry);
			}
			viewEntry.add(name);

			const dataIndex = model.index;
			let dataEntry = this.data.get(dataIndex);
			if (!dataEntry) {
				dataEntry = new Set();
				this.data.set(dataIndex, dataEntry);
			}
			dataEntry.add(name);
		}
	}

	removeClass(row, name) {
		const viewIndex = row.index;
		const viewEntry = this.view.get(viewIndex);
		if (viewEntry) {
			viewEntry.delete(name);
			if (!viewEntry.size) {
				this.view.delete(viewIndex);
			}
		}

		const model = row.model;
		if (model) {
			const dataIndex = model.index;
			const dataEntry = this.data[dataIndex];
			if (dataEntry) {
				dataEntry.delete(name);
				if (!dataEntry.size) {
					this.data.delete(dataIndex);
				}
			}
		}
	}

	invalidate() {
		const rows = this.box.rows();
		for (let {viewIndex, classList} of this.view.entries()) {
			const row = rows[viewIndex];
			if (row) {
				for (let cls of classList) {
					row.removeClassCore(cls);
				}
			}
		}

		const mapper = this.box.context.mapper;
		for (let {dataIndex, classList} of this.data.entries()) {
			const viewIndex = mapper.row(dataIndex);
			const row = rows[viewIndex];
			if (row) {
				for (let cls of classList) {
					row.addClassCore(cls);
				}
			}
		}
	}
}