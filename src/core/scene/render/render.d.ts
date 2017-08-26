import {RowView} from '../view/row.view';
import {ColumnView} from '../../column/column.view';

export declare class Renderer {
	constructor(context: any);

	rows(items: any[]): RowView[];

	columns(items: ColumnView[][]): ColumnView[][];
}