import {ColumnView} from '../scene';
import {ColumnModel} from './column.model';
import {Model} from '../infrastructure/model';

export declare class PivotColumnModel extends ColumnModel {
	constructor();
	rowIndex: number;
}

export declare class PivotColumn extends ColumnView {
	constructor(model: Model);
	static model(model: Model): Model;
}