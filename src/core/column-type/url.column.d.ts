import {ColumnView} from './column.model.view';
import {DataColumnModel} from './data.column.model';
import {IEditorOptions} from './column.model';
import {ColumnModel} from "./column.model";


export declare class UrlColumnModel extends DataColumnModel {
	constructor();

   editorOptions?: IEditorOptions;
}

export class UrlColumn extends ColumnView {
	constructor();
}