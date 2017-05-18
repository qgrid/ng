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
		this.empty = {};
	}

	add(item, row, column) {
		row = this.indexMapper.row(row, item);
		let entry = this.items[row];
		if (!entry) {
			entry = new BucketEntry({}, this.indexMapper);
			this.items[row] = entry;
		}

		entry.add(item, column);
		delete this.empty[row];
	}

	remove(item, row, column) {
		row = this.indexMapper.row(row, item);
		const entry = this.items[row];
		if (!entry) {
			throw  new AppError('bucket', `Can't find entry at index ${row}`);
		}

		// TODO: refactor this, can be memory leaks
		const isEmpty = entry.remove(item, column);
		if (isEmpty) {
			this.empty[row] = true;
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

	count() {
		return this.items
			.filter((_, i) => !this.isEmpty(i))
			.length;
	}

	map(f) {
		return this.items
			.filter((_, i) => !this.isEmpty(i))
			.map(entry => f(entry));
	}

	isEmpty(row) {
		row = this.indexMapper.row(row);
		return this.empty.hasOwnProperty(row) || !this.items[row];
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
		column = this.mapper.column(column, item);
		if (entry.hasOwnProperty(column)) {
			throw new AppError('bucket', `Item already exists at index ${column}`);
		}

		entry[column] = item;
	}

	remove(item, column) {
		const entry = this.entry;
		column = this.mapper.column(column, item);
		if (!entry.hasOwnProperty(column) || entry[column] !== item) {
			throw  new AppError('bucket', `Can't find item ${item}`);
		}

		delete entry[column];
		return Object.keys(entry).length === 0;
	}

	count() {
		return Object.keys(this.entry).length;
	}
}