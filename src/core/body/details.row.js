import {DataRow} from './data.row';
import {sumBy} from '../utility';

export class DetailsRow extends DataRow {
	constructor(model, context) {
		super(model, context);
	}

	colspan(rowDetails, column, pin) {
		return sumBy(this.columnList(pin), c => c.colspan);
	}

	columns(rowDetails) {
		return [rowDetails.column];
	}

	getValue() {
		return null;
	}
}