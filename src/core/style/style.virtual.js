export class VirtualRowStyle {
	constructor(model) {
		this.model = model;
		this.style = model.style().row;
	}

	apply(row, context) {
		this.style(row, context);
	}
}

export class VirtualCellStyle {
	constructor(model) {
		this.model = model;
		this.style = model.style().cell;
	}

	apply(row, column, context) {
		this.style(row, column, context);
	}
}