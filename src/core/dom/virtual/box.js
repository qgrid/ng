import {VirtualCell} from './cell';
import {VirtualRow} from './row';
import {Box} from '../box';

export class VirtualBox extends Box {
	constructor(context, model) {
		super(context, model);
	}

	invalidate(){

	}

	createRowCore(index, element) {
		return new VirtualRow(this, index, element);
	}

	createCellCore(element) {
		return new VirtualCell(this.context, element);
	}
}