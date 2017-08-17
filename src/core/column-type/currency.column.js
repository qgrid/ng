import {ColumnView} from './column.model.view';
import {DataColumnModel} from './data.column.model';
import {TemplatePath} from '../template';

TemplatePath.register('currency-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

TemplatePath.register('currency-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});


export class CurrencyColumnModel extends DataColumnModel {
	constructor() {
		super('text');

		this.maxLength = 140;
	}
}

export class CurrencyColumn extends ColumnView {
	constructor(model) {
		super(model);

		this.symbol = '$';
	}

	static model(model) {
		return model ? CurrencyColumn.assign(model) : new CurrencyColumnModel();
	}
}