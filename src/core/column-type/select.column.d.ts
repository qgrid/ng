import {ColumnView} from './column.model.view';
import {ColumnModel} from './column.model';


export declare class SelectColumnModel extends ColumnModel {
	constructor();

	key: string;
	title: string;
	canEdit: boolean;
	canResize: boolean;

}

export declare class SelectColumn extends ColumnView {
	constructor(model: ColumnModel);

	static model(model: ColumnModel): any;
}