import {isUndefined} from '../../utility';

export class ElementSelector {
	constructor(markup, name) {
		this.name = name;
		this.markup = markup;
	}

	select(pin) {
		const markup = this.markup;
		const name = this.name;
		if (!isUndefined(pin)) {
			const name = pin ? `${name}-${pin}` : name;
			return markup.hasOwnProperty(name) ? [markup[name]] : [];
		}

		const result = [];
		if (markup.hasOwnProperty(`${name}-left`)) {
			result.push(markup[`${name}-left`]);
		}

		if (markup.hasOwnProperty(name)) {
			result.push(markup[name]);
		}

		if (markup.hasOwnProperty(`${name}-right`)) {
			result.push(markup[`${name}-right`]);
		}

		return result;

	}
}
