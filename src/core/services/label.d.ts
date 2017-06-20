import {ColumnModel} from '../column-type/column.model';

export declare interface IGetResult{
	(row: any): any;
}

export declare function get(row: object, column: ColumnModel): any;

export declare function getFactory(column: ColumnModel): IGetResult;

export declare function set(row: object, column: ColumnModel, label: object): void;