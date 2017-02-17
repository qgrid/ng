import ColumnView from 'core/column-type/column.view';
import TemplatePath from 'core/template/template.path';
import ColumnModel from './column.model';

TemplatePath.register('select-cell', (template) => {
	return {
		model: 'selection',
		resource: template.for
	};
});

class SelectColumnModel extends ColumnModel {
	constructor() {
		super('select');

		this.key = '$select';
		this.title = 'Select';
		this.canEdit = false;
		this.canResize = false;
	}
}

export default class SelectColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? SelectColumn.assign(model) : new SelectColumnModel();
	}
}