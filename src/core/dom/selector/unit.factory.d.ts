import {Range} from '../../infrastructure/range';

export declare class UnitFactory {
	constructor(rowRange: Range, columnRange: Range);
	rowRange: Range;
	columnRange: Range;
	cell(element: object, rowIndex: number, columnIndex: number);
	row(element: object, rowIndex: number);
}