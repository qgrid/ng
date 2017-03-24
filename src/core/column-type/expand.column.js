import ColumnView from 'core/column-type/column.view';
import TemplatePath from 'core/template/template.path';
import ColumnModel from './column.model';

TemplatePath.register('expand-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

class ExpandColumnModel extends ColumnModel {
	constructor() {
		super('expand');

		this.key = '$expand';
		this.title = 'Expand';
		this.canEdit = false;
		this.canResize = false;
	}
}

export default class ExpandColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? ExpandColumn.assign(model) : new ExpandColumnModel();
	}
}