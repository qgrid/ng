import {Box} from './box';

export class Foot extends Box {
	constructor(context, markup) {
		super(context);

		this.markup = markup;
	}

	getElementsCore() {
		const markup = this.markup;
		const result = [];
		if (markup.hasOwnProperty('foot-left')) {
			result.push(markup['foot-left']);
		}

		if (markup.hasOwnProperty('foot')) {
			result.push(markup['foot']);
		}

		if (markup.hasOwnProperty('foot-right')) {
			result.push(markup['foot-right']);
		}

		return result;
	}
}