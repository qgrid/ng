import {ColumnView} from './column.model.view';
import {DataColumnModel} from './data.column.model';
import {TemplatePath} from '../template';

TemplatePath.register('bool-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

TemplatePath.register('bool-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

export class BoolColumnModel extends DataColumnModel {
	constructor() {
		super('bool');

		this.trueValue = true;
		this.falseValue = false;

		this.isIndeterminate = value => !(value === this.trueValue || value === this.falseValue);
		this.isChecked = value => value === this.trueValue;
	}
}

export class BoolColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? BoolColumn.assign(model) : new BoolColumnModel();
	}
}