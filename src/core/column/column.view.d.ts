import {View} from '../view/view';
import {Model} from "../infrastructure/model";


export declare class ColumnView extends View {
	constructor(public model: Model, public service: object);

	updateOn(generation: string): boolean;
}