import {ColumnView} from '../scene';
import {ColumnModel} from './column.model';
import {Model} from '../infrastructure/model';

declare class RowDetailsColumnModel extends ColumnModel {
	constructor();
}

export declare class RowDetailsColumn extends ColumnView {
	constructor(model: Model);
	static model(model: Model): Model;
}