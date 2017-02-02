import ColumnView from 'core/view/view.column';
import DataColumnModel from './column.model.data';
import TemplatePath from 'core/template/template.path';

TemplatePath.register('date-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

TemplatePath.register('date-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class DateColumnModel extends DataColumnModel {
	constructor() {
		super('date');

		this.format = 'yyyy/MM/dd';
	}
}

export default class DateColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model() {
		return new DateColumnModel();
	}
}