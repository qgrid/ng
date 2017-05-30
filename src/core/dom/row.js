import {Element} from './element';

export class Row extends Element {
	constructor(box, index, element = null) {
		super(element);

		this.box = box;
		this.index = index;
	}

	get model() {
		return this.box.context.model(this.getElement());
	}

	cells() {
		return this.box.rowCellsCore(this.index);
	}

	cell(columnIndex) {
		return this.box.cellCore(
			this.index,
			this.box.context.mapper.column(columnIndex)
		);
	}
}