import {View} from '../view/view';
import {ColumnListModel} from "../column-list/column.list.model";
import {ColumnModel} from "../column-type/column.model";
import {Model} from "../infrastructure/model";
import {getFactory as labelFactory, set as setLabel} from '../services/label';

export declare interface IGetValueFactory{
	(): any;
}

export declare interface IValueFactory{
	(column: ColumnModel, labelFactory: labelFactory): any;
}

export declare class BodyView extends View {
	constructor(model: Model, table: object);

	table: object;
	rows: any[];

	columns(row: any, pin: string): ColumnModel[];

	rowspan(): number;

	colspan(column: ColumnModel, row: any): number;

	value(row: any, column: ColumnModel, value: any): string;

	label(row: any, column: ColumnModel, value: any): string;

	valueFactory(column: ColumnModel, getValueFactory: IGetValueFactory): any;

	labelFactory(column: ColumnModel): IValueFactory;
}
