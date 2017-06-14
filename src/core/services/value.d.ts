import {ColumnModel} from '../column-type/column.model';

interface IGetResult{
	(row: any): any;
}

export declare function get(row: any, column: ColumnModel): IGetResult;

export declare function getFactory(column: ColumnModel): any;

export declare function set(row: object, column: ColumnModel, value: string): void;
