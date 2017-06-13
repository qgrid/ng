import {ColumnModel} from '../column-type/column.model';
import {Row} from '../row/row';

export declare function get(row: Row, column: ColumnModel): any;

export declare function getFactory(column: ColumnModel): any;

export function set(row: Row, column: ColumnModel, value: string): any;
