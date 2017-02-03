import ColumnView from 'core/view/view.column';
import DataColumnModel from './column.model.data';
import TemplatePath from 'core/template/template.path';

TemplatePath.register('array-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

TemplatePath.register('array-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class ArrayColumnModel extends DataColumnModel{
	constructor(){
		super('array');
	}
}

export default class ArrayColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model() {
		return new ArrayColumnModel();
	}
}