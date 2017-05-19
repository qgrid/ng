import {Cell} from './cell';
import {Element} from './element';

export class Row extends Element {
	constructor(entry, element = null) {
		super(element);

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
		return this.entry.count();
	}
}