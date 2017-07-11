import {Model} from '../infrastructure/model';
import {Table} from '../dom/table';
import {Cell} from './cell';

export declare class CellSelector {
	constructor(model: Model, table: Table);
	model: Model;
	table: Table;
	map(items: any[]): Cell[];
}