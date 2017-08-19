import {DataRow} from './data.row';
import {sumBy} from '../utility';

export class DetailsRow extends DataRow {
	constructor(model, context) {
		super(model, context);
	}

	colspan(rowDetails, column, pin) {
		if (column.model.type === 'row-details') {
			return sumBy(this.columnList(pin), c => c.colspan);
		}

		return super.colspan(rowDetails, column, pin);
	}

	columns(rowDetails) {
		return [rowDetails.row];
	}

	getValue() {
		return null;
	}
}