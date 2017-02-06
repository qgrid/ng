import Pipe from 'core/pipe/pipe';

export default class DataModel {
	constructor() {
		this.rows = [];
		this.columns = [];

		this.pipe = [
			Pipe.data,
			Pipe.filter,
			Pipe.sort,
			Pipe.pagination,
			Pipe.memo,
			Pipe.group,
			Pipe.pivot,
			Pipe.column,
			Pipe.view
		];

		this.triggers = [
			'data',
			'pagination',
			'sort',
			'filter',
			'group',
			'pivot'
		];
	}
}