import {View} from '../view/view';
import {ColumnModel} from "../column-type/column.model";
import {Model} from "../infrastructure/model";
import {getFactory as labelFactory} from '../services/label';
import {Table} from "../dom/table";

export declare interface IGetValueFactory{
	(): any;
}

export declare interface IValueFactory{
	(column: ColumnModel, labelFactory: labelFactory): any;
}

export declare class BodyView extends View {
	constructor(public model: Model, public table: Table);

	table: Table;
	rows: any[];

	columns(row: any, pin: string): ColumnModel[];

	rowspan(): number;

	colspan(column: ColumnModel, row: any): number;

	value(row: any, column: ColumnModel, value: any): string;

	label(row: any, column: ColumnModel, value: any): string;

	valueFactory(column: ColumnModel, getValueFactory: IGetValueFactory): any;

	labelFactory(column: ColumnModel): IValueFactory;
}
