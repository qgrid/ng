import ColumnView from 'core/column-type/column.view';
import TemplatePath from 'core/template/template.path';
import ColumnModel from './column.model';

TemplatePath.register('row-number-cell', (template) => {
	return {
		model: template.for,
		resource: `${template.for}.${template.type}`
	};
});

class RowNumberColumnModel extends ColumnModel {
	constructor() {
		super('row-number');

		this.key = '$row.number';
		this.title = '#';
		this.canEdit = false;
		this.canResize = false;
	}
}

export default class RowNumberColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static  model() {
		return new RowNumberColumnModel();
	}
}