import filter from './pipe.filter';
import pagination from './pipe.pagination';
import sort from './pipe.sort';
import data from './pipe.data';

export default class Pipe {
	static get data() {
		return data;
	}

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