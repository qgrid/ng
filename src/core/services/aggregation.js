export default class Aggregation {
	constructor() {
	}

	static first(rows, getValue) {
		if(!rows.length){
			return null;
		}

		return getValue(rows[0]);
	}

	static last(rows, getValue) {
		if(!rows.length){
			return null;
		}

		return getValue(rows[rows.length - 1]);
	}

	static max(rows, getValue) {
		if(!rows.length){
			return null;
		}

		var max = Math.max.apply(Math, rows.map(getValue));
		return max;
	}

	static count(rows) {
		if(!rows.length){
			return null;
		}

		return rows.length;
	}

}