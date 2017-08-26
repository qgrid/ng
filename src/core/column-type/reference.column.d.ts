import {ColumnView} from '../scene';
import {DataColumnModel} from './data.column.model';
import {Model} from '../infrastructure/model';

export declare class ReferenceColumnModel extends DataColumnModel {
	constructor();
}

export class ReferenceColumn extends ColumnView {
	constructor(model: Model);
	static model(model: Model): Model;
}