import filter from './pipe.filter';
import pagination from './pipe.pagination';
import sort from './pipe.sort';
import data from './pipe.data';
import memo from './pipe.memo';
import group from './pipe.group';
import pivot from './pipe.pivot';
import column from './pipe.column';
import view from './pipe.view';

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

	static get memo(){
		return memo;
	}

	static get group() {
		return group;
	}

	static get pivot() {
		return pivot;
	}

	static get column(){
		return column;
	}

	static get view(){
		return view;
	}
}