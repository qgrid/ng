import ColumnView from 'core/view/view.column';
import DataColumnModel from './column.model.data';
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