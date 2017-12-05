import {PipeUnit as PU} from '../pipe/pipe.unit';

export class PipeModel {
	constructor() {
		this.triggers = {
			'data': {
				'rows': PU.default, 
				'columns': PU.column
			},
			'pagination': {
				'current': PU.default, 
				'size': PU.Default
			},
			'sort': {
				'by': PU.default
			},
			'filter': {
				'by': PU.default, 
				'unit': PU.column
			},
			'group': {
				'by': PU.default
			},
			'pivot': {
				'by': PU.default				
			},
			'columnList': {
				'index': PU.column
			},
			'row': {
				'status': PU.rowDetails
			},
			'selection': {
				'mode': PU.column,
				'unit': PU.column   
			}
		};  	
	}
}