export default class SelectionBehavior {
	constructor(state, apply){
		this.state = state;
		this.apply = apply;
	}

	select(item, state, unit) {
		const items = this.selectCore(item, state, unit);
		this.state.toggle(items, state);
		this.model.selection({ items: this.state.view }, {source: 'toggle', unit: unit});
	}

	selectCell(cell, unit) {
		const items = this.selectCellCore(cell, unit);

		if (items) {
			this.apply(() => { this.select(items); });
		}
	}

	selectRange(startCell, endCell, unit) {
		const items = this.selectRangeCore(startCell, endCell, unit);

		if (items) {
			this.apply(() => {
				this.reset();
				this.select(items, true);
			});
		}
	}

	selectCore(item) {
		return item;
	}

	selectCellCore() {
		return [];
	}

	selectRangeCore() {
		return [];
	}

	reset() {
		this.state.clear();
	}

	get view() {
		return this.state.view;
	}
}

