import ColumnView from 'core/column-type/column.model.view';
import DataColumnModel from './data.column.model';
import TemplatePath from 'core/template/template.path';
import {noop, yes} from 'core/services/utility';

TemplatePath.register('file-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

TemplatePath.register('file-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class FileColumnModel extends DataColumnModel {
	constructor() {
		super('file');

		this.canEdit = false;
		this.onUpload = noop;
		this.canUpload = yes;
	}
}

export default class FileColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? FileColumn.assign(model) : new FileColumnModel();
	}
}