import Behavior from './highlight.behavior';
import {GRID_PREFIX} from 'core/definition';

export default class DefaultHighlight extends Behavior {
	constructor(model, markup, cellsBuilder) {
		super(model, markup, cellsBuilder);
	}

	applyCore(items) {
		this.cells(items).forEach((cell) => this.state(cell, true));
	}

	clearCore(items) {
		this.cells(items).forEach((cell) => this.state(cell, false));
	}

	state(item, state) {
		if (state) {
			item.classList.add(`${GRID_PREFIX}-selected`);
		}
		else {
			item.classList.remove(`${GRID_PREFIX}-selected`);
		}
	}
}