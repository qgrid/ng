import {ColumnListModel} from "../column-list/column.list.model";
import {ICreateResult} from "../column/column.factory";


export declare interface IColumnFactory{
	(model: ColumnListModel): ICreateResult;
}

export declare function generate(rows: any[], columnFactory: IColumnFactory, deep: boolean): ColumnListModel;
