import {IEntity} from "../column/column.factory";
import {Model} from "../infrastructure/model";
import {ColumnModel} from "../column-type/column.model";


export declare interface IColumnFactory{
	(model: Model): IEntity;
}

export declare function generate(rows: any[], columnFactory: IColumnFactory, deep: boolean): ColumnModel[];
