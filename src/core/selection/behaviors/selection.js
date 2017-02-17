export default class Selection {
	constructor(model) {
		this.model = model;
	}

	select(item, state = true) {
		if (Array.isArray(item)) {
			item.forEach(item => this.select(item, state));
			return;
		}

		if (item instanceof Node) {
			const rows = this.model.data().rows;
			item.rows.forEach(index => this.select(rows[index], state));
			return;
		}

		this.selectCore(item, state);
	}

	state(item) {
		if (Array.isArray(item)) {
			const all = item.every(item => this.state(item));
			return all ? true : item.some(item => this.state(item)) ? null : false;
		}

		if (item instanceof Node) {
			const rows = this.model.data().rows;
			const all = item.rows.every(index => this.state(rows[index]));
			return all ? true : item.rows.some(index => this.state(rows[index])) ? null : false;
		}

		return this.stateCore(item);
	}

	selectCore() {
	}

	stateCore() {
		return false;
	}

	get view() {
		return [];
	}
}