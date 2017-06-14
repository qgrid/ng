import {ColumnModel} from '../column-type/column.model';

export interface IGetResult{
	(row: any): any;
}

export declare function get(row: object, column: ColumnModel): any;

export function getFactory(column: ColumnModel): IGetResult;

export function set(row: object, column: ColumnModel, label: object): void;