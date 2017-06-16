import {ColumnModel} from "../column-type/column.model";

export declare class ColumnListModel {
	constructor();

	generation: string; // deep | shallow
	index: string[];
	columns: ColumnModel[];
	reference: object;

}