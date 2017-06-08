import {StyleBox} from './style.box';

export class CellBox extends StyleBox {
	constructor() {
		super();
	}

	key(cell) {
		return `${cell.rowIndex}x${cell.columnIndex}`;
	}
}