import ColumnView from 'core/column-type/column.view';
import TemplatePath from 'core/template/template.path';
import ColumnModel from './column.model';

TemplatePath.register('pivot-cell', (template) => {
	return {
		model: 'pivot',
		resource: template.for
	};
});

class PivotColumnModel extends ColumnModel {
	constructor() {
		super('pivot');

		this.key = '$pivot';
		this.title = 'Pivot';
		this.source = 'generation';
		this.canEdit = false;
		this.canSort = false;
		this.canResize = false;
		this.width = 60;
		this.rowIndex = 0;
		this.columnIndex = 0;
	}
}

export default class PivotColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static  model() {
		return new PivotColumnModel();
	}
}