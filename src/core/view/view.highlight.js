import View from './view';
import Command from 'core/infrastructure/command';
import * as columnService from 'core/column/column.service';
import * as sortService from 'core/sort/sort.service';
import {noop} from 'core/services/utility';

export default class HighlightView extends View {
	constructor(model, document) {
		super(model);
		this.model = model;
		this.document = document;

		let blur = noop;
		this.column = new Command({
			execute: (state, column) => {
				if (state) {
					blur = this.highlight(column.key, 'highlight');
				}
				else {
					blur();
					blur = noop;
				}
			}
		});

		this.onInit(this.model);
	}

	onInit(model) {
		let blurs = [];
		model.sortChanged.watch(e => {
			if (e.changes.hasOwnProperty('by')) {
				blurs = this.invalidate(blurs);
			}
		});

		model.viewChanged.watch(() => {
			blurs = this.invalidate(blurs);
		});
	}

	invalidate(items) {
		items.forEach(f => f());

		items = [];
		const sortBy = this.model.sort().by;
		for (let entry of sortBy) {
			const key = sortService.key(entry);
			items.push(this.highlight(key, 'sorted'));
		}

		return items;
	}


	columnIndex(key) {
		const columnRows = this.model.view().columns;
		const columns = columnService.lineView(columnRows).map(v => v.model);
		return columnService.findIndex(columns, key);
	}

	highlight(key, cls) {
		const index = this.columnIndex(key);
		let element = this.document.querySelector('tbody');
		for (let row of element.rows) {
			row.cells[index].classList.add(`q-grid-${cls}`);
		}

		return () => this.blur(key, cls);
	}

	blur(key, cls) {
		const index = this.columnIndex(key);
		let element = this.document.querySelector('tbody');
		for (let row of element.rows) {
			row.cells[index].classList.remove(`q-grid-${cls}`);
		}
	}
}