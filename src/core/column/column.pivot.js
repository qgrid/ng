import ColumnView from 'core/view/view.column';
import TemplatePath from 'core/template/template.path';

TemplatePath.register('pivot-cell', (template) => {
	return {
		model: 'pivot',
		resource: template.for
	};
});

export default class PivotColumn extends ColumnView {
	constructor(model) {
		super(model);
	}

	static  model() {
		return {
			key: '$pivot',
			type: 'pivot',
			title: 'Pivot',
			isVisible: true,
			rowIndex: 0,
			columnIndex: 0
		};
	}
}