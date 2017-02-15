import View from '../view/view';
import Command from 'core/infrastructure/command';
import behaviorFactory from './selection.factory';
import {isUndefined} from 'core/services/utility';
import {GRID_PREFIX} from 'core/definition';

export default class SelectionView extends View {
	constructor(model, markup) {
		super(model);

		this.markup = markup;
		this.behavior = behaviorFactory(model);
		this.toggle = new Command({
			execute: (item, state) => {
				if (isUndefined(item)) {
					item = model.view().rows;
				}

				if (isUndefined(state)) {
					state = this.behavior.state(item);
					this.behavior.select(item, state === null || !state);
				}
				else {
					this.behavior.select(item, state);
				}

				model.selection({items: this.behavior.view}, {source: 'toggle'});
			}
		});

		model.viewChanged.watch(() => this.behavior = behaviorFactory(model));
		model.selectionChanged.watch(e => {
			if (e.tag.source !== 'toggle' && e.changes.hasOwnProperty('items')) {
				this.behavior.select(e.state.items, true);
			}

			if (e.changes.hasOwnProperty('unit') ||
				e.changes.hasOwnProperty('mode')) {
				this.behavior = behaviorFactory(model);
				e.state.items.forEach((item) => this.highlight(item));
			}
			if (e.changes.hasOwnProperty('items') && e.state.unit === 'row') {
				const values = e.changes.items.newValue.concat(e.changes.items.oldValue);
				values.forEach((item) => this.highlight(item));
			}
		});
	}

	highlight(item) {
		const index = this.model.view().rows.indexOf(item);
		const body = this.markup.body;
		if (body && body.rows[index]) {
			for (let cell of body.rows[index].cells) {
				if (this.state(item)) {
					cell.classList.add(`${GRID_PREFIX}-selected`);
				} else {
					cell.classList.remove(`${GRID_PREFIX}-selected`);
				}
			}
		}
	}

	state(item) {
		if (!arguments.length) {
			item = this.model.view().rows;
		}

		return this.behavior.state(item) === true;
	}

	isIndeterminate(item) {
		if (!arguments.length) {
			item = this.model.view().rows;
		}

		return this.behavior.state(item) === null;
	}
}