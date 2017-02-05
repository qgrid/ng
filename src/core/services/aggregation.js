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

		let length = rows.length,
			i = 0,
			max = getValue(rows[i++]);

		while (i < length) {
			if (getValue(rows[i]) > max) {
				max = getValue(rows[i]);
			}
			i++;
		}

		return max;
	}

	static min(rows, getValue) {
		if (!rows.length) {
			return null;
		}

		let length = rows.length,
			i = 0,
			min = getValue(rows[i++]);

		while (i < length) {
			if (getValue(rows[i]) < min) {
				min = getValue(rows[i]);
			}
			i++;
		}

		return min;
	}

	static minMax(rows, getValue) {
		if (!rows.length) {
			return null;
		}

		let length = rows.length,
			i = 0,
			min = getValue(rows[i++]),
			max = min;

		while (i < length) {
			if (getValue(rows[i]) < min) {
				min = getValue(rows[i]);
			}

			if (getValue(rows[i]) > max) {
				max = getValue(rows[i]);
			}

			i++;
		}

		return [min, max];
	}

	static avg(rows, getValue) {
		if (!rows.length) {
			return null;
		}

		return Aggregation.sum(rows, getValue) / rows.length;
	}

	static sum(rows, getValue) {
		if (!rows.length) {
			return null;
		}

		let length = rows.length,
			i = 0,
			sum = 0;

		while (i < length) {
			sum += Number(getValue(rows[i]));
			i++;
		}

		return sum;
	}

	static join(rows, getValue) {
		if (!rows.length) {
			return null;
		}

		let length = rows.length,
			i = 0,
			join = getValue(rows[i++]);

		while (i < length) {
			join += '' + getValue(rows[i]);
			i++;
		}

		return join;
	}

	static count(rows) {
		if (!rows.length) {
			return null;
		}

		return rows.length;
	}

}