import {ColumnView} from './column.model.view';
import {ColumnModel} from './column.model';


export declare class RowIndicatorColumnModel extends ColumnModel {
	constructor();

   key: string;
	title: string;
	canEdit: boolean;
	canSort: boolean;
	canResize: boolean;
	canMove: boolean;
	canFocus: boolean;
	canHighlight: boolean;
	class: string;
	pin: string;
}

export declare class RowIndicatorColumn extends ColumnView {
	constructor(model: ColumnModel);

	static model(model: ColumnModel): any;
}