import {Fetch} from '../infrastructure/fetch';

export class CustomValidator {
	constructor(rules, key) {
		this.rules = rules;
		this.key = key;
	}

	validate(target) {
		let result = true;
		let i = 0;
		const value = target[this.key];

		while (result && i < this.rules.length) {
			const f = this.rules[i].custom;
			const fetch = new Fetch(f);
			const resetFetch = fetch.run();
			result = !!resetFetch(value);
			i++;
		}
		return result;
	}
}