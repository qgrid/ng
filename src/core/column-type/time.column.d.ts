import {ColumnView} from './column.model.view';
import {DataColumnModel} from './data.column.model';

export declare class TimeColumnModel extends DataColumnModel {
	constructor();

	format: string;
}

export declare class TimeColumn extends ColumnView {
	constructor();
}