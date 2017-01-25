import Event from '../../core/infrastructure/event';

export default class Theme {
	constructor() {
		this._name = 'default';
		this.changed = new Event();
	}

	get name() {
		return this._name;
	}

	set name(value) {
		if (value !== this._name) {
			const oldValue = this._name;
			this._name = value;

			this.changed.emit({
				newValue: value,
				oldValue: oldValue
			});
		}
	}
}