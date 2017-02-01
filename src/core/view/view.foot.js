import View from './view';
import * as columnService from 'core/column/column.service';
import Aggregation from 'core/services/aggregation';
import AppError from 'core/infrastructure/error';

export default class FootView extends View {
	constructor(model, valueFactory) {
		super(model);

		this.rows = [];
		this.columns = [];

		this.valueFactory = valueFactory;
		model.viewChanged.watch(() => this.invalidate(model));
	}

	invalidate(model) {
		const columns = model.view().columns;
 		this.columns = columnService.lineView(columns);
		this.rows = new Array(this.count);
	}

	get count() {
		const model = this.model;
		const columns = model.data().columns;
		const resourceCount = model.foot().resource.count;

		for (let i = 0, length = columns.length; i < length; i++) {
			if (columns[i].hasOwnProperty('aggregation')) {
				return Math.max(resourceCount, 1);
			}
		}

		return resourceCount;
	}

	value(column) {
		if (column.aggregation) {
			if (!Aggregation.hasOwnProperty(column.aggregation)) {
				throw new AppError(
					'foot',
					`Aggregation ${column.aggregation} is not registered`);
			}

			const rows = this.model.data().rows;
			const getValue = this.valueFactory(column);
			return Aggregation[column.aggregation](rows, getValue);
		}
		return null;
	}
}