import {ColumnView} from './column.model.view';
import {ColumnModel} from './column.model';


export declare class PivotColumnModel extends ColumnModel {
	constructor();

	key: string;
	title: string;
	source: string;
	canEdit: boolean;
	canSort: boolean;
	canResize: boolean;
	canHighlight: boolean;
	width: number;
	rowIndex: number;
}

export declare class PivotColumn extends ColumnView {
	constructor(model: ColumnModel);

	static model(model: ColumnModel): any;
}