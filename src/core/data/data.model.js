import PipeUnit from 'core/pipe/units/pipe.unit';

export default class DataModel {
	constructor() {
		this.rows = [];
		this.columns = [];
		this.pipe = PipeUnit.default;
		this.triggers = {
			'data': ['rows', 'columns'],
			'pagination': ['current'],
			'sort': ['by'],
			'filter': ['by'],
			'group': ['by'],
			'pivot': ['by']
		};
	}
}