import {isArray} from '../../utility';
import {Node} from '../../node';

export class SelectionState {
	constructor(model, service) {
		this.model = model;
		this.service = service;
	}

	select(item, state = true) {
		if (isArray(item)) {
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

	toggle(item) {
		const state = this.state(item);
		return this.select(item, state === null || !state);
	}

	state(item) {
		if (isArray(item)) {
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

	key(item) {
		return this.service.keyFactory()(item);
	}

	clear() {
		this.clearCore();
	}

	selectCore() {
	}

	clearCore() {
	}

	stateCore() {
		return false;
	}
}