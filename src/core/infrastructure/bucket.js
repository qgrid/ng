import {AppError} from './error';

export class Bucket {
	constructor() {
		this.items = [];
	}

	add(item, row, column) {
		let entry = this.items[row];
		if (!entry) {
			entry = [];
			this.items[row] = entry;
		}

		if (arguments.length > 2) {
			if (entry[column]) {
				throw new AppError('bucket', `Item already exists at index ${column}`);
			}

			entry[column] = item;
		}
		else {
			entry.push(item);
		}
	}

	set(item, row, column) {
		let entry = this.items[row];
		if (!entry) {
			entry = [];
			this.items[row] = entry;
		}

		entry[column] = item;
	}

	remove(item, row, column) {
		let entry = this.items[row];
		if (!entry) {
			throw  new AppError('bucket', `Can't find entry at index ${row}`);
		}

		const itemIndex = entry.indexOf(item);
		if (itemIndex < 0) {
			throw  new AppError('bucket', `Can't find item ${item}`);
		}

		if (arguments.length > 2) {
			if (itemIndex !== column) {
				throw  new AppError('bucket', `Can't find item ${item} at index ${column}`);
			}
		}
		else {
			entry.splice(itemIndex, 1);
		}
	}

	find(row, column) {
		if (row >= 0 && row < this.items.length) {
			const entry = this.items[row];
			if (arguments.length > 1) {
				return column >= 0 && column < entry.length ? entry[column] : null;
			}

			return entry;
		}

		return [];
	}

	get count() {
		return this.items.length;
	}

	asArray() {
		return this.items;
	}
}