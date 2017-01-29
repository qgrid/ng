import filter from './pipe.filter';
import pagination from './pipe.pagination';

export default class Pipe {
	static get filter() {
		return filter;
	}

	static get pagination() {
		return pagination;
	}
}