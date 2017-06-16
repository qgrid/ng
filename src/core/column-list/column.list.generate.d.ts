import {ColumnListModel} from "../column-list/column.list.model";
import {IEntity} from "../column/column.factory";


export declare interface IColumnFactory{
	(model: ColumnListModel): IEntity;
}

export declare function generate(rows: any[], columnFactory: IColumnFactory, deep: boolean): ColumnListModel;
