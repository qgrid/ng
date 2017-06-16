import {ColumnModel} from '../column-type/column.model';
import {ColumnView} from "./column.view";
import {Model} from "../infrastructure/model";


export declare function map(columns: ColumnModel[]): any;

export declare function getValue(column: ColumnModel): string;

export declare function find(columns: ColumnModel[], key: string): ColumnModel;

export declare function findIndex(columns: ColumnModel[], key: string): number;

export declare function findView(columns: ColumnModel[], key: string): ColumnModel;

export declare function dataView(columns: ColumnModel[], model: Model): any[];

export declare function lineView(columnRows: ColumnView[]): any[];

export declare function widthFactory(model: Model, form: object): any;