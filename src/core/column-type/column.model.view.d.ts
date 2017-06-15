import {ColumnModel} from './column.model';
import {View} from '../view/view';

export declare class ColumnView extends View {
	constructor(model: ColumnModel);

	colspan: number;
	rowspan: number

	static model(model: ColumnModel): ColumnModel;

	static assign(body: object): object;
}