import {DataRow} from './data.row';
import {sumBy} from '../utility';

export class DetailsRow extends DataRow {
	constructor(model, context) {
		super(model, context);
	}

	colspan(rowDetails, column, pin) {
		return sumBy(this.columnList(pin), c => c.colspan);
	}

	columns(rowDetails, pin) {
		if (rowDetails.column.model.pin === pin) {
			return [rowDetails.column];
		}

		return this.columnList(pin);
	}

	getValue() {
		return null;
	}
}