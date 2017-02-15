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

		model.viewChanged.watch(e => {
			this.behavior = behaviorFactory(model);
			if (e.changes.hasOwnProperty('rows')){
				e.state.rows.forEach((item) => this.blurRow(item));
			}
		});
		model.selectionChanged.watch(e => {
			if (e.tag.source !== 'toggle' && e.changes.hasOwnProperty('items')) {
				this.behavior.select(e.state.items, true);
			}

			if (e.changes.hasOwnProperty('unit') ||
				e.changes.hasOwnProperty('mode')) {
				this.behavior = behaviorFactory(model);
				e.state.items.forEach((item) => this.blurRow(item));
			}
			if (e.changes.hasOwnProperty('items') && e.state.unit === 'row') {
				e.changes.items.newValue.forEach((item) => {
					if (this.state(item)) {
						this.highlightRow(item);
					}
				});
				e.changes.items.oldValue.forEach((item) => {
					if (!this.state(item)) {
						this.blurRow(item);
					}
				});
			}
		});
	}

	highlightRow(item) {
		const index = this.model.view().rows.indexOf(item);
		const body = this.markup.body;
		if (body && body.rows[index]) {
			for (let cell of body.rows[index].cells) {
				this.highlight(cell);
			}
		}
	}

	blurRow(item) {
		const index = this.model.view().rows.indexOf(item);
		const body = this.markup.body;
		if (body && body.rows[index]) {
			for (let cell of body.rows[index].cells) {
				this.blur(cell);
			}
		}
	}

	highlight(item) {
		item.classList.add(`${GRID_PREFIX}-selected`);
	}

	blur(item) {
		item.classList.remove(`${GRID_PREFIX}-selected`);
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