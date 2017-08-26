import {ColumnView} from '../scene';
import {ColumnModel} from './column.model';
import {Model} from '../infrastructure/model';

export declare class SelectColumnModel extends ColumnModel {
	constructor();
}

export declare class SelectColumn extends ColumnView {
	constructor(model: Model);
	static model(model: Model): Model;
}