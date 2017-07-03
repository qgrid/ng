import {Model} from "../infrastructure/model";
import {IMapResult} from "../column/column.service";

export declare class Data {
	constructor(public model: Model);

	columns(): IMapResult[];

	columnMap(): IMapResult;

	rows(): any[];
}