import {ColumnView} from './column.model.view';
import {DataColumnModel} from './data.column.model';
import {IEditorOptions} from './email.column';

export declare class ReferenceColumnModel extends DataColumnModel {
	constructor();

	editorOptions: IEditorOptions;
}

export class ReferenceColumn extends ColumnView {
	constructor();

}