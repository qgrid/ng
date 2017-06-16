import {ColumnListModel} from "../column-list/column.list.model";

export declare interface IEntity{
	(entityType: string, columnType: string, body: string ): any;
}

export declare function columnFactory(model: ColumnListModel): IEntity;
