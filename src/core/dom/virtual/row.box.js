import {StyleBox} from './style.box';

export class RowBox extends StyleBox {
	constructor() {
		super();
	}

	key(row) {
		return row.index;
	}
}