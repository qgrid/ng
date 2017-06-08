export class VirtualRowStyle {
	constructor(table) {
		const model = table.model;
		this.table = table;
		this.model = model;
	}

	applyFactory() {
		const model = this.model;
		const style = model.style().row;
		const scroll = model.scroll;
		const box = this.table.body.rowBox;
		const entries = box.entries;

		return (row, context) => {
			context.row = context.row - scroll().cursor;
			style(row, context);

			const model = {
				index: context.row,
			};

			const key = box.key(model);
			const classList = entries.get(key);
			if (classList) {
				for (let cls of classList) {
					context.class(cls);
				}
			}
		}
	}
}

export class VirtualCellStyle {
	constructor(table) {
		const model = table.model;
		this.table = table;
		this.model = model;
	}

	applyFactory() {
		const model = this.model;
		const style = model.style().cell;
		const scroll = model.scroll;
		const box = this.table.body.cellBox;
		const entries = box.entries;

		return (row, column, context) => {
			context.row = context.row - scroll().cursor;
			style(row, column, context);

			const model = {
				rowIndex: context.row,
				columnIndex: context.column,
			};

			const key = box.key(model);
			const classList = entries.get(key);
			if (classList) {
				for (let cls of classList) {
					context.class(cls);
				}
			}
		}
	}
}