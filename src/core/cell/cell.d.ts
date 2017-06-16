export declare interface ICell{
	entry: ICell;
	rowIndex: number;
	columnIndex: number;
	column: object;
	row: object;
}

export declare class Cell {

	constructor(cell: ICell);

	get value(): string ;

	set value(value: string);

	get label(): object;

	set label(label: object);

	mode(value: string): void;
}