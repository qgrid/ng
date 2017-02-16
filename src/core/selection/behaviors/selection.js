export default class Selection {
	constructor(model, behavior) {
		this.model = model;
		this.behavior = behavior;
	}

	select(item, state = true, e) {
		if (Array.isArray(item)) {
			item.forEach(item => this.select(item, state, e));
			return;
		}

		if (item instanceof Node) {
			const rows = this.model.data().rows;
			item.rows.forEach(index => this.select(rows[index], state, e));
			return;
		}

		this.behavior.select(item, state, e);
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

		return this.behavior.state(item);

	}

	get view() {
		const view = this.behavior.view;
		return Array.isArray(view) ? view : [view];
	}
}