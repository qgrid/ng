import {isArray} from 'core/services/utility';

export default class SelectionBehavior {
	constructor(model) {
		this.model = model;
	}

	select(item, state = true) {
		if (isArray(item)) {
			item.forEach(item => this.select(item, state));
			return;
		}

		if (item.rows) {
			const rows = this.model.data().rows;
			item.rows.forEach(index => this.select(rows[index], state));
			return;
		}

		this.selectCore(item, state);
	}

	state(item) {
		if (isArray(item)) {
			const all = item.every(item => this.state(item));
			return all ? true : item.some(item => this.state(item)) ? null : false;
		}

		if (item.rows) {
			const rows = this.model.data().rows;
			const all = item.rows.every(index => this.state(rows[index]));
			return all ? true : item.rows.some(index => this.state(rows[index])) ? null : false;
		}

		return this.stateCore(item);
	}


	clear() {
		return this.clearCore();
	}

	selectCore() {
	}

	clearCore() {
	}

	stateCore() {
		return false;
	}


	get view() {
		return [];
	}
}