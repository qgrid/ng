import {Cell} from '../cell';

export class VirtualCell extends Cell {
	constructor(box, context, element = null) {
		super(context, element);

		this.box = box;
	}

	addClass(name) {
		this.box.addCellClass(this, name);
	}

	removeClass(name) {
		this.box.removeCellClass(this, name);

	}
}
