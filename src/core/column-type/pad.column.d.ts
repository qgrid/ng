import {ColumnView} from './column.model.view';
import {ColumnModel} from './column.model';


export declare class PadColumnModel extends ColumnModel {
	constructor();

	key: string;
	title: string;
	canEdit: boolean;
	canSort: boolean;
	canResize: boolean;
	canHighlight: boolean;
	canFocus: boolean;
	class: string;
	source: string;
}

export declare class PadColumn extends ColumnView {
	constructor(model: ColumnModel);

	static model(model: ColumnModel): any;
}