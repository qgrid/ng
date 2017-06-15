import {ColumnView} from './column.model.view';
import {ColumnModel} from './column.model';


declare class RowExpandColumnModel extends ColumnModel {
	constructor();

	key: string;
	title: string;
   canEdit: boolean;
	canResize: boolean;
	class: string;

}

export declare class RowExpandColumn extends ColumnView {
	constructor(model: ColumnModel);

	static model(model: ColumnModel): any;
}