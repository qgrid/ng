import {ColumnView} from './column.model.view';
import {DataColumnModel} from './data.column.model';
import {ColumnModel} from "./column.model";


export declare class DateColumn extends ColumnView {
	constructor(model: ColumnModel);

	static model(model: ColumnModel): any;
}