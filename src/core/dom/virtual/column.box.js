import {StyleBox} from './style.box';

export class ColumnBox extends StyleBox {
	constructor(context) {
		super(context);
	}

	key(column) {
		const mapper = this.context.mapper;
		const index = mapper.columnBack(column.index);
		return index;
	}
}