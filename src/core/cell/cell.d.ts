export declare interface ICell{
	entry: ICell;
	rowIndex: number;
	columnIndex: number;
	column: object;
	row: object;
}

export declare class Cell {

	constructor(cell: ICell);

	get value(): any ;

	set value(value: any);

	get label(): object;

	set label(label: object);

	mode(value: any): void;
}