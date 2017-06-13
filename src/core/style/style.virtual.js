export class VirtualRowStyle {
	constructor(table) {
		const model = table.model;
		this.table = table;
		this.model = model;
	}

	applyFactory() {
		const model = this.model;
		const style = model.style().row;
		const mapper = this.table.context.mapper;
		const box = this.table.body.rowBox;
		const entries = box.entries;

		return (row, context) => {
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

			context.row = mapper.rowBack(context.row);
			style(row, context);
		};
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
		const mapper = this.table.context.mapper;
		const cellBox = this.table.body.cellBox;
		const cellEntries = cellBox.entries;
		const columnBox = this.table.body.columnBox;
		const columnEntries = columnBox.entries;

		return (row, column, context) => {
			// column level
			const columnModel = {
				index: context.column
			};

			const columnKey = columnBox.key(columnModel);
			const columnClassList = columnEntries.get(columnKey);
			if (columnClassList) {
				for (let cls of columnClassList) {
					context.class(cls);
				}
			}

			// cell level
			const cellModel = {
				rowIndex: context.row,
				columnIndex: context.column,
			};

			const cellKey = cellBox.key(cellModel);
			const cellClassList = cellEntries.get(cellKey);
			if (cellClassList) {
				for (let cls of cellClassList) {
					context.class(cls);
				}
			}

			// add classes
			context.row = mapper.rowBack(context.row);
			context.column = mapper.columnBack(context.column);
			style(row, column, context);
		};
	}
}