export default class SelectionBehavior {
	constructor(state, apply){
		this.state = state;
		this.apply = apply;
	}

	select(item, state) {
		const items = this.selectCore(item, state);
		this.state.toggle(items, state);
		this.model.selection({ items: this.state.view }, {source: 'toggle'});
	}

	selectCell(cell) {
		const items = this.selectCellCore(cell);

		if (items) {
			this.apply(() => { this.select(items); });
		}
	}

	selectRange(startCell, endCell) {
		const items = this.selectRangeCore(startCell, endCell);

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

