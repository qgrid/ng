import {ColumnView} from './column.model.view';
import {DataColumnModel} from './data.column.model';
import {ColumnModel} from "./column.model";

export declare interface IEditorOptions {
	trigger: string;
	modelFactory: Function;
}

export declare class EmailColumnModel extends DataColumnModel {
	constructor();

	editorOptions: IEditorOptions;
}

export declare class EmailColumn extends ColumnView {
	constructor(model: ColumnModel);

	static model(model: ColumnModel): any;
}