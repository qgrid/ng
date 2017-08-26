import {RowView} from '../view/row.view';

export class Renderer {
	constructor(model) {
		this.model = model;
	}

	rows(items) {
		const result = [];
		for (let i = 0, length = items.length; i < length; i++) {
			const item = items[i];
			const row = new RowView(item);
			result.push(row);
		}

		return result;
	}

	columns(items) {
		return Array.from(items);
	}
}