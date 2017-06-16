import {ColumnView} from './column.model.view';
import {DataColumnModel} from './data.column.model';
import {Model} from "../infrastructure/model";

export declare interface IEditorOptions {
	trigger?: string;
	modelFactory?: () => Model;
	label?: string;
}

export declare class EmailColumnModel extends DataColumnModel {
	constructor();
}

export declare class EmailColumn extends ColumnView {
	constructor();

}