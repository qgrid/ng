import ColumnView from 'core/column/column.view';
import DataColumnModel from './data.column.model';
import TemplatePath from 'core/template/template.path';

TemplatePath.register('email-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

TemplatePath.register('email-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class EmailColumnModel extends DataColumnModel{
	constructor(){
		super('email');
	}
}

export default class EmailColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model() {
		return new EmailColumnModel();
	}
}