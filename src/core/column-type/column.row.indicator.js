import ColumnView from 'core/view/view.column';
import TemplatePath from 'core/template/template.path';
import ColumnModel from './column.model';

TemplatePath.register('row-indicator-cell', (template) => {
	return {
		model: template.for,
		resource: `${template.for}.${template.type}`
	};
});

class RowIndicatorColumnModel extends ColumnModel {
	constructor() {
		super('row-indicator');

		this.key = '$row.indicator';
		this.title = 'Row Indicator';
		this.canEdit = false;
	}
}

export default class RowIndicatorColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static  model() {
		return new RowIndicatorColumnModel();
	}
}