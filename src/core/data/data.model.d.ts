import {PipeUnit} from '../pipe/units/pipe.unit';
import {ColumnModel} from '../column-type/column.model';

export interface ITriggers{
	[data: string]: string[];
	[pagination: string]: string[];
	[sort: string]: string[];
	[filter: string]: string[];
	[group: string]: string[];
	[pivot: string]: string[];
}

export declare class DataModel {
	constructor();
	rows: any[];
	columns: ColumnModel[];
	pipe: Pipe;
	triggers: ITriggers;
}
