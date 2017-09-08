import {Model} from '../../infrastructure/model';
import {Range} from '../../infrastructure/range';

export interface ICell {
	element: object;
	columnRange: Range;
	rowRange: Range;
}

export interface AddFactoryResult {
	(pin: string): ICell[];
}

export declare class SelectorMark {
	constructor(model: Model, markup: object, name: string);
	model: Model;
	markup: object;
	name: string;
	select(): ICell[];
	addFactory(cells: ICell[]): AddFactoryResult;
}
