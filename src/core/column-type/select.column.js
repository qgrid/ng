import ColumnView from 'core/column-type/column.view';
import TemplatePath from 'core/template/template.path';
import ColumnModel from './column.model';

TemplatePath.register('select-cell', (template) => {
	return {
		model: 'selection',
		resource: template.for === 'head' ? 'select-all' : 'select'
	};
});

class SelectColumnModel extends ColumnModel {
	constructor() {
		super('select');

		this.key = '$select';
		this.title = 'Select';
		this.canEdit = false;
	}
}

export default class SelectColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static  model() {
		return new SelectColumnModel();
	}
}