import filter from './pipe.filter';
import pagination from './pipe.pagination';
import sort from './pipe.sort';

export default class Pipe {
	static get filter() {
		return filter;
	}

	static get pagination() {
		return pagination;
	}

	static get sort() {
		return sort;
	}
}