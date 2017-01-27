import * as _ from './utility';

export default class Aggregation {
	constructor() {
	}

	static first(rows, getValue) {
		if (!rows.length) {
			return null;
		}

		return getValue(rows[0]);
	}

	static last(rows, getValue) {
		if (!rows.length) {
			return null;
		}

		return getValue(rows[rows.length - 1]);
	}

	static max(rows, getValue) {
		if (!rows.length) {
			return null;
		}

		return getValue(_.maxBy(rows, d => getValue(d)));
	}

	static min(rows, getValue) {
		if (!rows.length) {
			return null;
		}

		return getValue(_.minBy(rows, d => getValue(d)));
	}

	static minMax(rows, getValue) {
		return [this.min(rows, getValue), this.max(rows, getValue)];
	}

	static avg(rows, getValue) {
		const length = rows.length;
		return rows.reduce(function (reduced, d) {
			return reduced + getValue(d) / length;
		}, 0);
	}

	static sum(rows, getValue) {
		return rows.reduce(function (reduced, d) {
			return reduced + Number(getValue(d));
		}, 0);
	}

	static join(rows, getValue) {
		return rows.reduce(function (reduced, d) {
			return reduced + getValue(d).toString();
		}, '');
	}

	static count(rows) {
		if (!rows.length) {
			return null;
		}

		return rows.length;
	}

}