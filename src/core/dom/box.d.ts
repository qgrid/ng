import {ColumnModel} from '../column-type/column.model';
import {Cell} from './cell';
import {Column} from './column';
import {Row} from './row';

export interface IColumn {
	(columnIndex: number): ColumnModel;
}

export interface IMapper {
	row(): any;
	column(): IColumn;
	rowBack(): any;
	columnBack(): any;
}

export interface IContext {
	mapper: IMapper;
	layer: any;
	model: (elem: Element) => any;
}

export declare class Box {
	constructor(context: IContext);

	context: IContext;

	cell(rowIndex: number, columnIndex: number): Cell;

	column(columnIndex: number): Column;

	row(rowIndex: number): Row;

	rows(columnIndex: number): Row[];

	rowCount(columnIndex: number): number;

	columnCount(rowIndex: number): number;
}
