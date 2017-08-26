import {ColumnView} from '../column/column.view';

export declare class Scene {
	constructor(context: any);

	rows(items: any[]): any[];

	columns(items: ColumnView[][]): ColumnView[][];

	area(items: ColumnView[][]): any;
}