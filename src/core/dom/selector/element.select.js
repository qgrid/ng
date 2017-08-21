import {isUndefined} from '../../utility';

export class ElementSelector {
	constructor(markup, name) {
		this.name = name;
		this.markup = markup;
	}

	select(pin) {
		const markup = this.markup;
		const name = this.name;
		const result = [];
		if (!isUndefined(pin)) {
			const id = pin ? `${name}-${pin}` : name;
			if (markup.hasOwnProperty(id)) {
				const element = markup[id];
				result.push(element);
			}
		}
		else {
			if (markup.hasOwnProperty(`${name}-left`)) {
				const element = markup[`${name}-left`];
				result.push(element);
			}

			if (markup.hasOwnProperty(name)) {
				const element = markup[name];
				result.push(element);
			}

			if (markup.hasOwnProperty(`${name}-right`)) {
				const element = markup[`${name}-right`];
				result.push(element);
			}
		}

		return result;
	}
}