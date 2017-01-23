export default class Theme {
	constructor() {
		this._name = 'default';
	}

	get name() {
		return this._name;
	}

	set name(value) {
		this._name = value;
	}
}