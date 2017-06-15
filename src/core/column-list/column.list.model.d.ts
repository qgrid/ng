import {ColumnModel} from "../column-type/column.model";

export declare class ColumnListModel {
	constructor();

	generation: object; // deep | shallow
	index: any[];
	columns: ColumnModel[];
	reference: object;

}