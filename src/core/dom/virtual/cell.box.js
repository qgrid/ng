export class CellBox {
	constructor(box) {
		this.box = box;
		this.view = new Map();
		this.data = new Map();
	}

	addClass(cell, name) {
		const viewKey = this.key(cell);
		let viewEntry = this.view.get(viewKey);
		if (!viewEntry) {
			viewEntry = {
				classList: new Set([name]),
				rowIndex: cell.rowIndex,
				columnIndex: cell.columnIndex
			};
			this.view.set(viewKey, viewEntry);
		}
		viewEntry.classList.add(name);

		const model = cell.model;
		if (model) {
			const dataKey = this.key(model);
			let dataEntry = this.data.get(dataKey);
			if (!dataEntry) {
				dataEntry = {
					classList: new Set([name]),
					rowIndex: model.rowIndex,
					columnIndex: model.columnIndex
				};
				this.data.set(dataKey, dataEntry);
			}
			dataEntry.classList.add(name);
		}
	}

	removeClass(cell, name) {
		const viewKey = this.key(cell);
		let viewEntry = this.view.get(viewKey);
		if (viewEntry) {
			viewEntry.classList.delete(name);
			if (!viewEntry.classList.size) {
				this.view.delete(viewKey);
			}
		}

		const model = cell.model;
		if (model) {
			const dataKey = this.key(model);
			let dataEntry = this.data.get(dataKey);
			if (dataEntry) {
				dataEntry.classList.delete(name);
				if (!dataEntry.classList.size) {
					this.data.delete(dataKey);
				}
			}
		}
	}

	invalidate() {
		const box = this.box;
		const data = this.data;
		this.data = new Map();

		for (let viewEntry of this.view.values()) {
			const cell = box.cellCore(viewEntry.rowIndex, viewEntry.columnIndex);
			for (let cls of viewEntry.classList) {
				cell.removeClass(cls);
			}
		}

		for (let dataEntry of data.values()) {
			const cell = box.cell(dataEntry.rowIndex, dataEntry.columnIndex);
			for (let cls of dataEntry.classList) {
				cell.addClass(cls);
			}
		}

		this.data = data;
	}

	key(model) {
		return `${model.rowIndex}x${model.columnIndex}`;
	}
}