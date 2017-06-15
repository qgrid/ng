import {ColumnView} from './column.model.view';
import {ColumnModel} from './column.model';


export declare class RowNumberColumnModel extends ColumnModel {
	constructor();
	key: string;
	title: string;
	canEdit: boolean;
	canResize: boolean;
	canMove: boolean;
	canHighlight: boolean;

}

export declare class RowNumberColumn extends ColumnView {
	constructor(model: ColumnModel);

	static model(model: ColumnModel): any;
}