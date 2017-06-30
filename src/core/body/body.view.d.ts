import {View} from '../view/view';
import {ColumnModel} from "../column-type/column.model";
import {Model} from "../infrastructure/model";
import {Table} from "../dom/table";
import {IGetResult} from "../services/value";
import {RowModel} from "../row/row.model";

export declare interface IGetValueFactory{
	(column: ColumnModel): IGetResult;
}

export declare class BodyView extends View {
	constructor(public model: Model, public table: Table);

	table: Table;
	rows: RowModel[];

	columns(row: any, pin: string): ColumnModel[];

	rowspan(row: any, column: ColumnModel): number;

	colspan(column: ColumnModel, row: any): number;

	value(row: any, column: ColumnModel, value: any): string;

	label(row: any, column: ColumnModel, value: any): string;

	valueFactory(column: ColumnModel, getValueFactory: IGetValueFactory): IGetResult;

	labelFactory(column: ColumnModel): IGetResult;
}