import {ColumnListModel} from "../column-list/column.list.model";
import {ICreateResult} from "../column/column.factory";
import {RowDetails} from "../row-details/row.details";

export declare interface IColumnFactory{
	(model: ColumnListModel): ICreateResult;
}

export declare function generate(rows: RowDetails[], columnFactory: IColumnFactory, deep: boolean): any;
