import {ColumnListModel} from "../column-list/column.list.model";

export declare interface ICreateResult{
	(enityType: string, columnType: string, body: string ): any;
}

export declare function columnFactory(model: ColumnListModel): ICreateResult
