import {PipeUnit} from '../pipe/units/pipe.unit';
import {Resource} from '../resource';

export class DataModel {
	constructor() {
		this.resource = new Resource();
		this.rows = [];
		this.columns = [];
		this.pipe = PipeUnit.default;
		this.triggers = {
			'data': ['rows'],
			'pagination': ['current', 'size'],
			'sort': ['by'],
			'filter': ['by'],
			'group': ['by'],
			'pivot': ['by']
		};
	}
}