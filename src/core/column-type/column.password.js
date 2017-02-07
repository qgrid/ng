import ColumnView from 'core/view/view.column';
import DataColumnModel from './column.model.data';
import TemplatePath from 'core/template/template.path';

TemplatePath.register('password-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

TemplatePath.register('password-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class PasswordColumnModel extends DataColumnModel {
	constructor() {
		super('password');

		this.canSort = false;
	}
}

export default class PasswordColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model() {
		return new PasswordColumnModel();
	}
}