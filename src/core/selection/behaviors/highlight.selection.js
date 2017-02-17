import {GRID_PREFIX} from 'core/definition';
import AppError from 'core/infrastructure/error';

export default class HighlightSelection {
	constructor(model, markup) {
		this.model = model;
		this.markup = markup;
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

	highlightColumn(index) {
		const body = this.markup.body;
		if (body && body.rows) {
			for (let row of body.rows) {
				this.highlight(row.cells[index]);
			}
		}
	}

	blurColumn(index) {
		const body = this.markup.body;
		if (body && body.rows) {
			for (let row of body.rows) {
				this.blur(row.cells[index]);
			}
		}
	}

	highlight(item) {
		item.classList.add(`${GRID_PREFIX}-selected`);
	}

	blur(item) {
		item.classList.remove(`${GRID_PREFIX}-selected`);
	}

	select(e) {
		if (e) {
			switch (e.oldUnit) {
				case 'row':
					const items = e.oldItems || this.model.view().rows;
					items.forEach((item) => this.blurRow(item));
					break;
				case 'column':
					e.oldItems.forEach((item) => this.blurColumn(item));
					break;
				case 'cell':
					break;
				default:
					throw new AppError(
						'highlight.selection',
						`Invalid type "${e.oldUnit}"`);
			}
			if (e.newItems) {
				switch (e.newUnit) {
					case 'row':
						e.newItems.forEach((item) => this.highlightRow(item));
						break;
					case 'column':
						e.newItems.forEach((item) => this.highlightColumn(item));
						break;
					case 'cell':
						break;
					default:
						throw new AppError(
							'highlight.selection',
							`Invalid type "${e.newUnit}"`);
				}
			}
		}
	}

}