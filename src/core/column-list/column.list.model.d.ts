import {ColumnModel} from "../column-type/column.model";

export declare enum Generation{
	deep,
	shallow
}

export declare class ColumnListModel {
	constructor();

	generation: Generation; // deep | shallow
	index: string[];
	columns: ColumnModel[];
	reference: object;

}