import {ColumnModel} from '../column-type/column.model';
import {ReferenceColumn} from '../column-type/reference.column';

export declare type GenerationMode = 'deep' | 'shallow';

export declare class ColumnListModel {
	constructor();
	generation: GenerationMode;
	index: string[];
	columns: ColumnModel[];
	reference: ReferenceColumn;
}