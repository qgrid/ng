import ColumnView from 'core/view/view.column';
import DataColumnModel from './column.model.data';
import TemplatePath from 'core/template/template.path';

TemplatePath.register('number-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

TemplatePath.register('number-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class NumberColumnModel extends DataColumnModel{
	constructor(){
		super('number');
	}
}

export default class NumberColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model() {
		return new NumberColumnModel();
	}
}