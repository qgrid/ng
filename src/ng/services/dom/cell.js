import AppError from 'core/infrastructure/error';
import {Element, ElementCore} from './element';
import {TD_CORE_NAME} from 'ng/definition'

class CellCore extends ElementCore {
	constructor() {
		super();
	}
}

const empty = new CellCore();
export default class Cell extends Element {
	static get empty() {
		return empty;
	}

	get model() {
		const ctrl = angular.element(this.element).controller(TD_CORE_NAME);
		if (!ctrl) {
			throw new AppError('cell', 'Controller for cell is not found')
		}

		return ctrl;
	}

	rect() {
		return this.element.getBoundingClientRect();
	}
}

