import {ColumnView} from './column.model.view';
import {DataColumnModel} from './data.column.model';
import {IEditorOptions} from './email.column';
import {ColumnModel} from "./column.model";


export declare class UrlColumnModel extends DataColumnModel {
	constructor();

   editorOptions: IEditorOptions;
}

export class UrlColumn extends ColumnView {
	constructor(model: ColumnModel);


	static model(model: ColumnModel): any;
}