import {Model} from "../infrastructure/model";
import {ColumnModel} from "../column-type/column.model";
import {ColumnType} from "../column/column.factory";

export declare interface IColumnFactory {
    (model: Model): ColumnType;
}
export declare interface IGenerateSettings {
    rows?: any[];
    columnFactory?: IColumnFactory;
    deep?: boolean;
}

export declare function generate(settings: IGenerateSettings): ColumnModel[];
