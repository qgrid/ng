import {AppError} from './error';
import {identity} from '../services/utility';

const identityIndexMapper = {
	row: identity,
	column: identity
};

export class Bucket {
	constructor(indexMapper = identityIndexMapper) {
		this.items = [];
		this.indexMapper = indexMapper;
	}

	add(item, row, column) {
		row = this.indexMapper.row(row);
		let entry = this.items[row];
		if (!entry) {
			entry = new BucketEntry({}, this.indexMapper);
			this.items[row] = entry;
		}

		entry.add(item, column);
	}

	remove(item, row, column) {
		row = this.indexMapper.row(row);
		const entry = this.items[row];
		if (!entry) {
			throw  new AppError('bucket', `Can't find entry at index ${row}`);
		}

		const isEmpty = entry.remove(item, column);
		if (isEmpty) {
			this.items.splice(row, 1);
		}
	}

	find(row, column) {
		row = this.indexMapper.row(row);
		const entry = this.items[row];
		if (entry) {
			if (arguments.length > 1) {
				return entry.find(column);
			}

			return entry;
		}

		return {};
	}

	get count() {
		return this.items.length;
	}

	map(f) {
		return this.items.map(entry => f(entry));
	}
}

class BucketEntry {
	constructor(entry, mapper) {
		this.entry = entry;
		this.mapper = mapper;
	}

	map(f) {
		const entry = this.entry;
		const mapper = this.mapper;
		return new Array(this.count).map((_, i) => f(entry[mapper.column(i)]));
	}

	find(column) {
		const entry = this.entry;
		column = this.mapper.column(column);
		if (entry.hasOwnProperty(column)) {
			return entry[column];
		}

		return null;
	}

	add(item, column) {
		const entry = this.entry;
		column = this.mapper.column(column);
		if (entry.hasOwnProperty(column)) {
			throw new AppError('bucket', `Item already exists at index ${column}`);
		}

		entry[column] = item;
	}

	remove(item, column) {
		const entry = this.entry;
		column = this.mapper.column(column);
		if (!entry.hasOwnProperty(column) || entry[column] !== item) {
			throw  new AppError('bucket', `Can't find item ${item}`);
		}

		delete entry[column];
		return Object.keys(entry).length === 0;
	}

	get count() {
		return Object.keys(this.entry).length;
	}
}