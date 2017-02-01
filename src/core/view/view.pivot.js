import View from './view';
import {map as getColumnMap} from 'core/column/column.service';
import pivotBuilder from 'core/pivot/pivot.build';

export default class PivotView extends View {
	constructor(model, valueFactory) {
		super(model);

		this.valueFactory = valueFactory;
	}

	static build(model, valueFactory) {
		return () => {
			const dataState = model.data();
			const pivotState = model.pivot();

			const build = pivotBuilder(
				getColumnMap(dataState.columns),
				pivotState.by,
				valueFactory
			);

			return build(dataState.rows);
		}
	}

	title() {
		return 'P'
	}

	value() {
		return 0;
	}
}