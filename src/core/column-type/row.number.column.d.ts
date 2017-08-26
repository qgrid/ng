import {ColumnView} from '../scene';
import {ColumnModel} from './column.model';
import {Model} from '../infrastructure/model';

export declare class RowNumberColumnModel extends ColumnModel {
	constructor();
}

export declare class RowNumberColumn extends ColumnView {
	constructor(model: Model);
	static model(model: Model): Model;
}