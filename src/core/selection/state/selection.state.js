import AppError from 'core/infrastructure/error';
import {isArray, isUndefined} from 'core/services/utility';
import Node from 'core/node/node';

const keySelector = (unit, selector) => {
	switch (unit) {
		case 'row':
			return selector.row;
		case 'column':
			return selector.column;
		case 'cell':
			return cell => ({
				row: selector.row(cell.row),
				column: selector.column(cell.column)
			});
		default:
			throw new AppError('selection.state', `Invalid unit ${unit}`);
	}
};

export default class SelectionState {
	constructor(model) {
		this.model = model;
	}

	select(item, state = true) {
		if (isArray(item)) {
			item.forEach(item => this.select(item, state));
			return;
		}

		if (item instanceof Node) {
			const rows = this.model.data().rows;
			item.rows.forEach(index => this.select(rows[index], state));
			return;
		}

		this.selectCore(item, state);
	}

	toggle(item, state) {
		if (isUndefined(state)) {
			state = this.state(item);
			return this.select(item, state === null || !state);
		}

		return this.select(item, state);
	}

	state(item) {
		if (isArray(item)) {
			const all = item.every(item => this.state(item));
			return all ? true : item.some(item => this.state(item)) ? null : false;
		}

		if (item instanceof Node) {
			const rows = this.model.data().rows;
			const all = item.rows.every(index => this.state(rows[index]));
			return all ? true : item.rows.some(index => this.state(rows[index])) ? null : false;
		}

		return this.stateCore(item);
	}

	clear() {
		return this.clearCore();
	}

	get view() {
		const items = this.viewCore();
		const selectionState = this.model.selection();
		switch (selectionState.unit) {
			case 'row':
			case 'column':
			case 'cell':
				return items.map(keySelector(selectionState.unit, selectionState.key));
			case 'mix':
				return items.map(entry => ({
					unit: entry.unit,
					item: keySelector(entry.unit, selectionState.key)(entry.item)
				}));
			default:
				throw new AppError('selection.state', `Invalid unit ${selectionState.unit}`);
		}
	}

	selectCore() {
	}

	clearCore() {
	}

	stateCore() {
		return false;
	}

	viewCore() {
		return [];
	}

	key(item) {
		const unit = this.model.selection().unit;
		const rows = this.model.view().rows;
		const getCellKey = item => {
			if (item.column && item.row) {
				const columnKey = item.column.key;
				const rowIndex = rows.indexOf(item.row);

				if (columnKey && rowIndex >= 0) {
					return `${columnKey}[${rowIndex}]`;
				}
			}

			return item;
		};

		if (unit === 'cell') {
			return getCellKey(item);
		}

		if (unit === 'mix' && item.item) {
			if (item.unit === 'cell') {
				return getCellKey(item.item);
			}

			return item.item;
		}

		return item;
	}

}