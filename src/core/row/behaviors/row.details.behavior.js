export default class RowDetailsBehavior {
	constructor(model, rowSelector) {
		this.model = model;
		this.rowSelector = rowSelector;
		this.rows = new Set();
	}
	
	toggle(item) {
		this.select(item, !this.state(item));
	}

	select(item, state) {
		const row = this.rowSelector(item);
		if (state) {
			this.rows.add(item);
			row.classList.add('expanded');
		}
		else {
			this.rows.delete(item);
			row.classList.remove('expanded');
		}
	}

	state(item) {
		return this.rows.has(item);
	}

	clear() {
		this.rows = new Set();
	}
}