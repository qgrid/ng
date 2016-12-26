'use strict';

export default class Utility {
	static assign(target, ...sources) {
		return Object.assign(target, ...sources.map(x =>
			Object.entries(x)
				.filter(([key, value]) => value !== undefined) // eslint-disable-line angular/definedundefined, no-unused-vars
				.reduce((obj, [key, value]) => (obj[key] = value, obj), {})));
	}
}