import {ColumnModel} from '../column-type/column.model';


export declare function map(columns: ColumnModel[]): any;

export declare function getValue(column: ColumnModel): string;

export declare function find(columns: ColumnModel[], key: string): ColumnModel;

export declare function findIndex(columns: ColumnModel[], key: string): number;

export declare function findView(columns: ColumnModel[], key: string): ColumnModel;

export declare function dataView(columns: ColumnModel[], model: object): any[];

export declare function lineView(columnRows: any[]): any[];

export declare function widthFactory(model: object, form: object): any;