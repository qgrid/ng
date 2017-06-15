import {View} from '../view/view';


export declare class BodyView extends View {
	constructor(model: object, table: object);

	table: object;
	rows: any[];
	columnList: any[]

	invalidate(model: object): void;

}