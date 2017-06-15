import {ColumnView} from './column.model.view';
import {DataColumnModel} from './data.column.model';
import {ColumnModel} from "./column.model";


export declare class RowOptionsColumnModel extends DataColumnModel {
	constructor();

	key: string;
	title: string;
	canEdit: boolean;
	canResize: boolean
	canMove: boolean;
	canHighlight: boolean;
	width: number;
	class: string;
	pin: string;

}

export declare class RowOptionsColumn extends ColumnView {
	constructor(model: ColumnModel);

	static model(model: ColumnModel): any;
}