import ColumnView from 'core/view/view.column';
import Column from './column';
import TemplatePath from 'core/template/template.path';

TemplatePath.register('text-cell', (template, column) => {
	return {
		model: template.for,
		resource: column.key
	};
});

export default class ColumnText extends ColumnView {
	constructor(model) {
		super(model);
	}

	static model() {
		return new Column('text');
	}
}