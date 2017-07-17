import {ColumnModel} from '../column-type/column.model';
import {IDataPipe} from '../pipe/data.pipe';
import {IFilterPipe} from '../pipe/filter.pipe';
import {IPaginationPipe} from '../pipe/pagination.pipe';
import {ISortPipe} from '../pipe/sort.pipe';
import {IMemoPipe} from '../pipe/memo.pipe';
import {IGroupPipe} from '../pipe/group.pipe';
import {IPivotPipe} from '../pipe/pivot.pipe';
import {IColumnPipe} from '../pipe/column.pipe';
import {IViewPipe} from '../pipe/view.pipe';


export declare class DataModel {
	constructor();
	rows: any[];
	columns: ColumnModel[];
	pipe: [IDataPipe, IFilterPipe, IPaginationPipe, ISortPipe, IMemoPipe, IGroupPipe, IPivotPipe, IColumnPipe, IViewPipe];
	triggers: object[];
}
