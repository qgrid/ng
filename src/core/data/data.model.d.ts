import {ColumnModel} from '../column-type/column.model';

export declare class DataModel {
	constructor();
	rows: any[];
	columns: ColumnModel[];
	pipe: Function[];
	triggers: object;
}
