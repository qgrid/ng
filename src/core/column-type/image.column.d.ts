import {ColumnView} from './column.model.view';
import {DataColumnModel} from './data.column.model';
import {IHasPreview} from './file.column';
import {ColumnModel} from "./column.model";


export declare class ImageColumnModel extends DataColumnModel {
	constructor();

	canUpload: boolean;
	hasPreview: IHasPreview;
}

export declare class ImageColumn extends ColumnView {
	constructor();

}