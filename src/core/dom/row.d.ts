import {Element} from './element';
import {RowView} from '../scene/view/row.view';
import {Box} from './box';
import {Cell} from './cell';

export declare class Row extends Element {
	constructor(box: Box, index: number, element: HTMLElement);

	cells(): Cell[]

	cell(columnIndex: number): Cell;

	model(): RowView;
}
