import {Row} from './row';
import {Column} from './column';
import {Cell} from './cell';
import {Element} from './element';

class Box extends Element {
	constructor() {
		super();
	}

	column() {
		return Column.empty
	}

	row() {
		return Row.empty
	}

	rows() {
		return [];
	}

	rowCount() {
		return 0;
	}

	columnCount() {
		return 0;
	}

	cell() {
		return Cell.empty;
	}
}