import {ColumnModel} from './';

export class DataColumnModel extends ColumnModel {
	constructor() {
		super(...arguments);

		this.isDefault = true;
		this.aggregation = null;
		this.aggregationOptions = {
			distinct: false,
			separator: '; '
		};
	}
}