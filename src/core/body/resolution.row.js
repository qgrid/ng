import {Node} from '../node';
import {RowDetails} from '../row-details';
import {DataRow} from './data.row';
import {DetailsRow} from './details.row';
import {NodeRow} from './node.row';

export class ResolutionRow {
	constructor(model, context) {
		this.model = model;
		this.context = context;

		this.strategies = new Map();
		this.strategies.set(RowDetails, new DetailsRow(model, context));
		this.strategies.set(Node, new NodeRow(model, context));
		this.defaultStrategy = new DataRow(model, context);
	}

	colspan(row, column, pin) {
		const strategy = this.resolve(row);
		return strategy.colspan(row, column, pin);
	}

	rowspan(row, pin) {
		const strategy = this.resolve(row);
		return strategy.rowspan(row, pin);
	}

	columns(row, pin) {
		const strategy = this.resolve(row);
		return strategy.columns(row, pin);
	}

	getValue(row, column, select) {
		const strategy = this.resolve(row);
		return strategy.getValue(row, column, select);
	}

	setValue(row, column, value) {
		const strategy = this.resolve(row);
		return strategy.setValue(row, column, value);
	}

	resolve(row) {
		const type = row.constructor;
		return this.strategies.get(type) || this.defaultStrategy;
	}
}