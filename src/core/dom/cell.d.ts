import {Element} from './element';
import {Cell as CellModel} from '../cell/cell';
import {IContext} from './box';

export declare class Cell extends Element {
	constructor(context: IContext, rowIndex: number, columnIndex: number, element: HTMLElement);

	readonly model: CellModel;
}
