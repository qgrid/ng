import PipeUnit from 'core/pipe/units/pipe.unit';

export default class DataModel {
	constructor() {
		this.rows = [];
		this.columns = [];
		this.pipe = PipeUnit.default;
		this.triggers = {
			'data': ['rows', 'columns'], // TODO: do we need to remove columns as a trigger here?
			'pagination': ['current', 'size'],
			'sort': ['by'],
			'filter': ['by'],
			'group': ['by'],
			'pivot': ['by']
		};
	}
}