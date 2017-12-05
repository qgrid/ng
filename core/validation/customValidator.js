export class CustomValidator {
	constructor(rules) {
		this.rules = rules;
	}

	onInit() {
		console.log(this.rules);
	}
}