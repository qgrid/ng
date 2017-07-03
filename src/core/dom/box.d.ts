import {FakeElement} from './fake/element';
import {ColumnModel} from "../column-type/column.model";
import {Model} from "../infrastructure/model";

export interface IIsDataRow{
	(row: any): boolean;
}

export interface IContext{
	mapper: IMapper;
	layer: any;
	model: (elem: Element) => any;
	isDataRow: IIsDataRow;
}

export interface IMapper{
	row: any;
	column: IColumn;
	rowBack: any;
	columnBack: any;
}

export interface IColumn{
	(columnIndex: number): ColumnModel;
}

export interface IRowCore {
	(index: number): IRowFactory;
}

export interface IRowFactory{
	(index: number, fakeElem: FakeElement): any;
}

export interface IColumnFactory{
	(index: number): ColumnModel;
}

export interface ICellCore{
	(rowIndex: number, columnIndex: number): any;
}

export declare class Box {
	constructor(public context: IContext , public model: Model);

	cell(rowIndex: number, columnIndex: number): ICellCore;

	column(index: number): IColumnFactory;

	row(index: number): IRowCore;

	rows(): any[];

	rowCount(): number;

	columnCount(): number;

	getElements(): any[];

}