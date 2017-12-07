import {Fetch} from '../infrastructure/fetch';

export class CustomValidator {
	constructor(rules, key) {
		this.rules = rules;
		this.key = key;
	}

	validate(target) {
		const value = target[this.key];
		const promises = [];
		for (let rule of this.rules) {
			const f = rule.custom;
			const fetch = new Fetch(f);
			fetch.run({value: value});
			promises.push(fetch.busy);
		}

		return Promise.all(promises);
	}
}