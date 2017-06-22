import {ColumnView} from './column.model.view';
import {DataColumnModel} from './data.column.model';

export declare class DateColumnModel extends DataColumnModel {
	constructor();

	format: string;
}

export declare class DateColumn extends ColumnView {
	constructor();
}