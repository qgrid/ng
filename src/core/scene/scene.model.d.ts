import {ColumnView} from './view/column.view';
import {RowView} from './view/row.view';

export declare class SceneModel {
	constructor();

	rows: RowView[];
	columns: ColumnView[][];
	area: any;
}
