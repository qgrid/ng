import {set as setValue} from '../../services/value';

export class DataRow {
	constructor(model) {
		this.model = model;
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
		if (arguments.length) {
			return this.model.scene().area[pin] || [];
		}

		return this.model.view().columns;
	}
}