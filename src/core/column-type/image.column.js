import ColumnView from 'core/column-type/column.model.view';
import DataColumnModel from './data.column.model';
import TemplatePath from 'core/template/template.path';
import {noop, yes} from 'core/services/utility';

TemplatePath.register('image-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

TemplatePath.register('image-cell-edit', (template, column) => {
	return {
		model: 'edit',
		resource: column.key
	};
});

class ImageColumnModel extends DataColumnModel {
	constructor() {
		super('image');

		this.onUpload = noop;
		this.canUpload = yes;

		this.hasPreview =
			file => file !== null && file.type.indexOf('image/') === 0
	}
}

export default class ImageColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model(model) {
		return model ? ImageColumn.assign(model) : new ImageColumnModel();
	}
}