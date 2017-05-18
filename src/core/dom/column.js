import {Cell} from './cell';

export class Column {
	constructor(bucket, index) {
		this.bucket = bucket;
		this.index = index;
	}

	cells() {
		const column = this.index;
		return this.bucket
			.map(entry => {
				const item = entry.find(column);
				return item ? new Cell(item, item.element) : new Cell();
			});
	}

	cell(row) {
		const item = this.bucket.find(row, this.index);
		return item ? new Cell(item, item.element) : new Cell();
	}

	cellCount() {
		// TODO: improve that
		return this.cells().length;
	}
}