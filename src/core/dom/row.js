import {Cell} from './cell';

export class Row {
	constructor(entry) {
		this.entry = entry;
	}

	cells() {
		return this.entry.map(item => new Cell(item, item.element));
	}

	cell(column) {
		const item = this.entry.find(column);
		return item ? new Cell(item, item.element) : new Cell();
	}

	cellCount() {
		return this.entry.length;
	}
}