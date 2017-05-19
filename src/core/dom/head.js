import {Box} from './box';

export class Head extends Box {
	constructor(context, markup) {
		super(context);

		this.markup = markup;
	}

	getElementsCore() {
		const markup = this.markup;
		const result = [];
		if (markup.hasOwnProperty('head-left')) {
			result.push(markup['head-left']);
		}

		if (markup.hasOwnProperty('head')) {
			result.push(markup['head']);
		}

		if (markup.hasOwnProperty('head-right')) {
			result.push(markup['head-right']);
		}

		return result;
	}
}