import {View} from '../view/view';
import {ColumnListModel} from "../column-list/column.list.model";
import {ColumnModel} from "../column-type/column.model";

export declare class BodyView extends View {
	constructor(model: object, table: object);

	table: object;
	rows: any[];

	columns(row: any, pin: string): ColumnModel[];

	rowspan(): number;

	colspan(column: ColumnModel, row: any): number;

	value(row: any, column: ColumnModel, value: string): string;

	label(row: any, column: ColumnModel, value: string): string;
}
