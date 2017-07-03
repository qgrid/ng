import {Box, ICellCore} from './box';

export declare class Column {
	constructor(public box: Box, public index: number);

	cells(): any[];

	cell(rowIndex: number): ICellCore;

	addClass(name: string): void;

	removeClass(name: string): void;
}