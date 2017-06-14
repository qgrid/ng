import {Column} from '../column';

export class VirtualColumn extends Column {
	constructor(box, index) {
		super(box, index);

		this.box = box;
	}

	addClass(name, force = false) {
		this.box.addColumnClass(this, name, force);
	}

	removeClass(name, force = false) {
		this.box.removeColumnClass(this, name, force);

	}
}
