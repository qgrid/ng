import {Element} from './element';
import {Row as RowModel} from '../row/row';
import {IContext} from "./box";
import {ColumnModel} from "../column-type/column.model";

export interface IBox{
	context: IContext
	rowCellsCore: IRowCellCore;
	cellCore: ICellCore;
}

export interface IRowCellCore{
	(index: number): any[];
}

export interface ICellCore{
	(index: number, columnModel: ColumnModel): any;
}

export declare class Row extends Element {
	constructor(public box: IBox, public index: number, element: HTMLElement);

	readonly model: RowModel;

	cells(): any[]

	cell(columnIndex: number): ICellCore;
}