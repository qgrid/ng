import {ColumnView} from './column.model.view';
import {DataColumnModel} from './data.column.model';
import {ColumnModel} from "./column.model";

export declare interface IEditorOptions {
	trigger?: string;
	modelFactory?: () => ColumnModel;
	label?: string;
}

export declare class EmailColumnModel extends DataColumnModel {
	constructor();
}

export declare class EmailColumn extends ColumnView {
	constructor();

}