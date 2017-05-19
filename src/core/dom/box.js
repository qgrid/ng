import {Row} from './row';
import {Column} from './column';
import {Cell} from './cell';
import {Bucket2d, Bucket} from '../infrastructure';

export class Box {
	constructor(context) {
		this.cellBucket = new Bucket2d(context.mapper);
		this.rowBucket = new Bucket();
	}

	column(index) {
		return new Column(this.cellBucket, index);
	}

	row(index) {
		const cellEntry = this.cellBucket.find(index);
		const row = this.rowBucket.find(index);
		return new Row(cellEntry, row ? row.element : null);
	}

	rows() {
		const cellBucket = this.cellBucket;
		return this.rowBucket.map((row, i) => new Row(cellBucket.find(i) , row.element));
	}

	rowCount() {
		return this.cellBucket.count();
	}

	columnCount() {
		const entry = this.cellBucket.find(0);
		return entry.count();
	}

	cell(row, column) {
		const item = this.cellBucket.find(row, column);
		return item ? new Cell(item, item.element) : new Cell();
	}
}