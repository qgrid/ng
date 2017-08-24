import {set as setValue} from '../services/value';

export class DataRow {
	constructor(model, context) {
		this.model = model;
		this.context = context;
	}

	colspan(row, column) {
		return column.colspan;
	}

	rowspan() {
		return 1;
	}

	columns(row, pin) {
		return this.columnList(pin);
	}

	getValue(row, column, select) {
		return select(row);
	}

	setValue(row, column, value) {
		return setValue(row, column, value);
	}

	columnList(pin = null) {
		const columns = this.context.columns;
		if (arguments.length) {
			return columns.filter(c => c.model.pin === pin);
		}

		return columns;
	}
}