import Pipe from 'core/pipe/pipe';

export default class DataModel {
	constructor() {
		this.rows = [];
		this.columns = [];

		this.pipe = [
			Pipe.data,
			Pipe.filter,
			Pipe.sort,
			Pipe.pagination
		];

		this.triggers = [
			'pagination',
			'sort',
			'filter'
		];
	}
}