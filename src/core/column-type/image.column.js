import ColumnView from '@grid/core/column-type/column.model.view';
import DataColumnModel from './data.column.model';
import TemplatePath from '@grid/core/template/template.path';
import {yes} from '@grid/core/services/utility';
import {isImage} from '@grid/core/services/file';

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

		this.canUpload = yes;

		this.hasPreview =
			name => isImage(name);
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