import {VirtualBox} from './virtual';
import {Box} from './box';
import * as columnService from '../column/column.service';
import {SelectorMark} from './selector';

export class Body extends Box {
	constructor(context, model, markup) {
		super(context, model, new SelectorMark(model, markup, 'body'));
	}
}

export class VirtualBody extends VirtualBox {
	constructor(context, model, markup) {
		super(context, model, new SelectorMark(model, markup, 'body'));
	}

	columnCount() {
		// TODO: add row index support
		const columns = this.model.view().columns;
		return columnService.lineView(columns).length;
	}
}