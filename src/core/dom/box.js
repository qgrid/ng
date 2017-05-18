import {Row} from './row';
import {Column} from './column';
import {Cell} from './cell';
import {Bucket} from '../infrastructure';

export class Box {
	constructor(context) {
		this.cellBucket = new Bucket(context.mapper);
	}

	column(index) {
		return new Column(this.cellBucket, index);
	}

	row(index) {
		const entry = this.cellBucket.find(index);
		return new Row(entry);
	}

	rows() {
		return this.cellBucket.map(entry => new Row(entry));
	}

	rowCount() {
		return this.cellBucket.count();
	}

	columnCount() {
		const entry = this.cellBucket.find(0);
		return entry.length;
	}

	cell(row, column) {
		const item = this.cellBucket.find(row, column);
		return item ? new Cell(item) : new Cell();
	}
}