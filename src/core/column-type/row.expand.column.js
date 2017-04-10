import ColumnView from 'core/column-type/column.model.view';
import TemplatePath from 'core/template/template.path';
import ColumnModel from './column.model';

TemplatePath.register('row-expand-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

class RowExpandColumnModel extends ColumnModel {
	constructor() {
		super('row-expand');
		this.key = '$row.expand';
		this.title = 'Expand';
		this.canEdit = false;
		this.canResize = false;
	}

}

export default class RowExpandColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? RowExpandColumn.assign(model) : new RowExpandColumnModel();
	}
}