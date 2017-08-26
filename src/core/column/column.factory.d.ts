import {Model} from '../infrastructure/model';
import {ColumnView} from '../scene';

export interface IColumnFactoryResult {
  (type: string, body?: any): ColumnView;
}

export declare function columnFactory(model: Model): IColumnFactoryResult;
