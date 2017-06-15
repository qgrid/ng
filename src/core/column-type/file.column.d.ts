import {ColumnView} from './column.model.view';
import {DataColumnModel} from './data.column.model';
import {IEditorOptions} from './email.column';
import {ColumnModel} from "./column.model";

export declare interface IHasPreview {
	(name: string): boolean;
}

export declare class FileColumnModel extends DataColumnModel {
	constructor();

	canUpload: boolean
	editorOptions: IEditorOptions;
	hasPreview: IHasPreview;
}

export declare class FileColumn extends ColumnView {
	constructor(model: ColumnModel);

	static model(model: ColumnModel): any;
}