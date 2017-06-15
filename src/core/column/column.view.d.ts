import {View} from '../view/view';


export declare interface IModel{
	DataChanged: object;
	ColumnListChanged: object;
	columnList: Function;
}

export declare class ColumnView extends View {
	constructor(model: IModel, service: object);

	updateOn(generation: string): boolean;
}