import {
	filterPipe,
	paginationPipe,
	sortPipe,
	dataPipe,
	memoPipe,
	groupPipe,
	pivotPipe,
	columnPipe,
	viewPipe
} from './';

export class Pipe {
	static get data() {
		return dataPipe;
	}

	static get filter() {
		return filterPipe;
	}

	static get pagination() {
		return paginationPipe;
	}

	static get sort() {
		return sortPipe;
	}

	static get memo(){
		return memoPipe;
	}

	static get group() {
		return groupPipe;
	}

	static get pivot() {
		return pivotPipe;
	}

	static get column(){
		return columnPipe;
	}

	static get view(){
		return viewPipe;
	}
}