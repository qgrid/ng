import {ColumnView} from './column.model.view';
import {ColumnModel} from './column.model';
import {TemplatePath} from '../template';

TemplatePath.register('filter-row-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

export class FilterRowColumnModel extends ColumnModel {
	constructor(model) {
		super();

		this.key = `$filter.row.${model.key}`;
		this.type= 'filter-row';
		this.class = 'filter';
		this.title = model.title;
		this.width = model.width;
		this.minWidth = model.minWidth;
		this.maxWidth = model.maxWidth;

		this.sourceKey = model.key;
	}
}

export class FilterRowColumn extends ColumnView {
	constructor(model) {
		super(new FilterRowColumnModel(model));
	}
}