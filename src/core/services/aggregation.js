export default class Aggregation {
	constructor() {
		this.rows = null;
	}

	static first(column, getValue) {
		if (this.rows == null) {
			return;
		}

		return 'first: ' + getValue(this.rows[0], column);
	}

	static last(column, getValue) {
		if (this.rows == null) {
			return;
		}

		return 'last: ' + getValue(this.rows[this.rows.length - 1], column);
	}

	static max(column, getValue) {
		if (this.rows == null) {
			return;
		}

		var max = Math.max.apply(Math, this.rows.map(function (d) {
			return getValue(d, column);
		}));

		return 'Max: ' + max;
	}

	static saveRows(rows) {
		this.rows = rows;
	}

	static count() {
		if (this.rows == null) {
			return;
		}

		return 'Count: ' + this.rows.length;
	}

}