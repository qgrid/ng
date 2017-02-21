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

	static avg(rows, getValue, aggregationOptions) {
		if (!rows.length) {
			return null;
		}

		if (aggregationOptions.distinct) {
			let uniqueSet = new Set();
			return Aggregation.sum(rows, getValue, aggregationOptions, uniqueSet) / uniqueSet.size;
		}

		return Aggregation.sum(rows, getValue) / rows.length;
	}

	static sum(rows, getValue, aggregationOptions, options) {
		if (!rows.length) {
			return null;
		}

		let length = rows.length,
			i = 0,
			sum = 0;

		if (aggregationOptions.distinct) {
			let uniqueValues = options || new Set(),
				value = null;

			while (i < length) {
				value = Number(getValue(rows[i]));

				if (!uniqueValues.has(value)) {
					sum += value;
					uniqueValues.add(value);
				}

				i++;
			}

			return sum;
		}

		while (i < length) {
			sum += Number(getValue(rows[i]));
			i++;
		}

		return sum;
	}

	static join(rows, getValue, aggregationOptions) {
		if (!rows.length) {
			return null;
		}

		let separator = aggregationOptions.separator || '',
			length = rows.length,
			i = 0,
			join = getValue(rows[i++]);

		if (aggregationOptions.distinct) {
			let uniqueValues = new Set(),
				value = join;
			uniqueValues.add(value);

			while (i < length) {
				value = getValue(rows[i]);

				if (!uniqueValues.has(value)) {
					join += separator + value;
					uniqueValues.add(value);
				}

				i++;
			}

			return join;
		}

		while (i < length) {
			join += separator + getValue(rows[i]);
			i++;
		}

		return join;
	}

	static count(rows, getValue, aggregationOptions) {
		if (!rows.length) {
			return null;
		}

		if (aggregationOptions.distinct) {
			let length = rows.length,
				i = 0,
				uniqueValues = new Set(),
				value = null;

			while (i < length) {
				value = Number(getValue(rows[i]));
				uniqueValues.add(value);
				i++;
			}

			return uniqueValues.size;
		}

		return rows.length;
	}

}